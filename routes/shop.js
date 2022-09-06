const express = require('express');

const router = express.Router();

const ProductsController = require('./../controllers/Products.controller')
const ShopController = require('./../controllers/Shop.controlller')


router.get('/', ProductsController.getHome);
router.get('/products', ProductsController.getProducts);
router.get('/cart', ShopController.getCart);
router.get('/checkout', ShopController.getCheckout);

module.exports = router;
