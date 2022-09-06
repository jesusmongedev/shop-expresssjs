const Product = require('./../models/Product.model')

// User Controllers
exports.getHome = (_, res) => {
  Product.fetchAll((products) => {
    res.render('shop/index', {
      pageTitle: 'Shop',
      path: '/',
      products,
    })
  })
}

exports.getProducts = (_, res) => {
  Product.fetchAll((products) => {
    res.render('shop/product-list', {
      pageTitle: 'Products',
      path: '/products',
      products,
    })
  })
}
