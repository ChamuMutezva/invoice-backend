const express = require('express');
const router = express.Router();

// GET all invoices
router.get('/', (req, res) => {
    res.json({mssg: 'Get  all invoices'})
})

//GET a single invoice
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single invouce'})
})

//POST a new invoice
router.post('/',(req, res) => {
    res.json({mssg: 'POST a new invoice'})
} )

// DELETE an invoice
router.delete('/:id',(req, res) => {
    res.json({mssg: 'delete an invoice'})
} )

// UPDATE an invoice
router.patch('/:id',(req, res) => {
    res.json({mssg: 'update an invoice'})
} )



module.exports = router