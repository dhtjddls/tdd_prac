const express = require('express');
const router = express.Router();
const controller = require('../controller/product');
router.post('/products', controller.createProdcut);

module.exports = router;
