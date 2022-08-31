const express = require('express');

const router = express.Router();

const ProductsController = require('./../controllers/Products.controller')


router.get('/', ProductsController.getProducts);

module.exports = router;
