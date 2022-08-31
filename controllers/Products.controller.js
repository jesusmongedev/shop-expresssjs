const Product = require('./../models/Product.model')

exports.getProducts = (req, res) => {
  Product.fetchAll((products) => {
    console.log('products', products)
    res.render('shop', { pageTitle: 'Home Page', isShopActive: true, products })
  })
}

exports.getAddProducts = (req, res) => {
  res.render('add-products', {
    pageTitle: 'Add Products Page',
    isProductActive: true,
  })
}

exports.postAddProduct = (req, res) => {
  const { title } = req.body

  const product = new Product(title)

  product.save()

  res.redirect('/')
}
