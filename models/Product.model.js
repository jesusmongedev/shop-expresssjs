const fs = require('fs')
const path = require('path')
const rootPath = require('./../helpers/path')

const p = path.join(rootPath, 'data', 'products.json')

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    return err ? cb([]) : cb(JSON.parse(fileContent))
  })
}

module.exports = class Product {
  constructor(t) {
    this.title = t
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this)

      fs.writeFile(p, JSON.stringify(products), (err) => {
          console.error('err', err)
          throw new Error('Cannnot write file');
      })
    })
  }

  static fetchAll(cb) {
    getProductsFromFile(cb)
  }
}
