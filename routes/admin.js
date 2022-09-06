const express = require('express');

const router = express.Router();

const AdminController = require('./../controllers/Admin.controller')

router.get('/add-product', AdminController.getAddProducts)
router.get('/edit-product', AdminController.getEditProducts)
router.get('/products', AdminController.getAdminProducts)

router.post('/add-product', AdminController.postAddProduct)

module.exports = router;
