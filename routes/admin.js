const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res) => {
    res.sendFile('/views/add-products.html', { root: '.' })
})

router.post('/add-product', (req, res) => {
    const {title} = req.body
    console.log('title:', title);
    res.redirect('/')
})

module.exports = router;
