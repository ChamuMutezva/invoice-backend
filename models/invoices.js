const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const invoicesSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    clientName: {
      type: String,
      required: true,
    },
    dueDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
