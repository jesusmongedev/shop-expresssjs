exports.getNotFound = (req, res) => {
    res.status(400).render('404', { pageTitle: 'Page not found' })
  }