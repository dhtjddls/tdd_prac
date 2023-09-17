const Product = require('../schema/product');

exports.createProdcut = async (req, res, next) => {
  try {
    const createdProduct = await Product.create(req.body);
    res.status(201).json(createdProduct);
  } catch (error) {
    next(error);
  }
};
