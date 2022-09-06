const Product = require('./../models/Product.model')

// Admin Controllers
exports.getAddProducts = (_, res) => {
    res.render('admin/add-products', {
      pageTitle: 'Add Products Page',
      path: '/add-product',
    })
  }
  
  exports.getEditProducts = (_, res) => {
    res.render('admin/edit-product', {
      pageTitle: 'Admin Edit Products Page',
      path: '/edit-product',
    })
  }
  
  exports.getAdminProducts = (_, res) => {
    res.render('admin/products', {
      pageTitle: 'Admin Products Page',
      path: '/admin/products',
    })
  }
  
  exports.postAddProduct = (req, res) => {
    const { title } = req.body
  
    const product = new Product(title)
  
    product.save()
  
    res.redirect('/products')
  }