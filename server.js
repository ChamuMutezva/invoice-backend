require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT;
const invoicesRoutes = require('./routes/invoices')

// app express
const app = express()

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use(('/api/invoices'),invoicesRoutes)

// listen for requests
app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
})