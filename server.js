require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT;
const invoicesRoutes = require("./routes/invoices");

// app express
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/invoices", invoicesRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(PORT, () => {
      console.log(`connected to db and listening to port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
