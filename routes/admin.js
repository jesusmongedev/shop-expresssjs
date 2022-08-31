const express = require('express');

const router = express.Router();

const ProductsController = require('./../controllers/Products.controller')

router.get('/add-product', ProductsController.getAddProducts)

router.post('/add-product', ProductsController.postAddProduct)

module.exports = router;
