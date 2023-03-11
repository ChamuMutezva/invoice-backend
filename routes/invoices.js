const express = require("express");
const { createInvoice, getInvoice, getAllInvoices } = require("../controllers/invoiceController");

const router = express.Router();

// GET all invoices
router.get("/", getAllInvoices);

//GET a single invoice
router.get("/:id", getInvoice);

//POST a new invoice
router.post("/", createInvoice);

// DELETE an invoice
router.delete("/:id", (req, res) => {
  res.json({ mssg: "delete an invoice" });
});

// UPDATE an invoice
router.patch("/:id", (req, res) => {
  res.json({ mssg: "update an invoice" });
});

module.exports = router;
