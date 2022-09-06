exports.getCart = (req, res) => {
  res.render('shop/cart', { pageTitle: 'Your cart', path: '/cart' })
}

exports.getCheckout = (req, res) => {
  res.render('shop/checkout', { pageTitle: 'Checkout', path: '/checkout' })
}
