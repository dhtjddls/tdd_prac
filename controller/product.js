const Product = require('../schema/product');

exports.createProdcut = (req, res, next) => {
  const createdProduct = Product.create(req.body);

  res.status(201).json(createdProduct);
};
