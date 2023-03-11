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
      type: String,
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
      street: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      postCode: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
    },
    clientAddress: {
      street: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      postCode: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
    },
    items: [
      {
        name: String,
        quantity: Number,
        price: Number,
        total: Number,
      },
    ],

    total: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Invoice", invoiceSchema);
