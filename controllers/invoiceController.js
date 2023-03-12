const mongoose = require('mongoose')
const Invoice = require('../models/invoiceModel');

// get all invoices
const getAllInvoices = async (req, res) => {
  const invoices = await Invoice.find({}).sort({ createdAt: -1 });

  res.status(200).json(invoices);
};

// get an invoice
const getInvoice = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "invoice does not exist"})
  }
  const invoice = await Invoice.findById(id);

  if (!invoice) {
    return res.status(404).json({ error: "No such invoice" });
  }

  res.status(200).json(invoice);
};

// create an invoice
const createInvoice = async (req, res) => {
  const {
    id,
    createdAt,
    paymentDue,
    description,
    paymentTerms,
    clientName,
    clientEmail,
    status,
    senderAddress,
    clientAddress,
    items,
    total,
  } = req.body;

  try {
    const invoice = await Invoice.create({
      id,
      createdAt,
      paymentDue,
      description,
      paymentTerms,
      clientName,
      clientEmail,
      status,
      senderAddress,
      clientAddress,
      items,
      total,
    });
    res.status(200).json(invoice);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete an invoice

const deleteInvoice = async(req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "invoice does not exist"})
  }

  const invoice = await Invoice.findOneAndDelete({_id: id})

  if (!invoice) {
    return res.status(404).json({ error: "No such invoice" });
  }

  res.status(200).json(invoice);

}

// update an invoice
const updateInvoice = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "invoice does not exist"})
  }

  const invoice = await Invoice.findOneAndUpdate({_id: id}, {
    ...req.body 
  })

  if (!invoice) {
    return res.status(404).json({ error: "No such invoice" });
  }

  res.status(200).json(invoice);
}

module.exports = { createInvoice, getInvoice, getAllInvoices, deleteInvoice , updateInvoice};
