const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const invoiceSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
    },
    paymentDue: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    paymentTerms: {
      type: Number,
      required: true,
    },
    clientName: {
      type: String,
      required: true,
    },
    clientEmail: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    senderAddress: {
      type: Object,
      required: true,
    },
    clientAddress: {
      type: Object,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Invoice", invoiceSchema);
