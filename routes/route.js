const express = require('express');
const router = express.Router();
const proudctController = require('../controller/product');
router.post('/products', proudctController.createProdcut);

module.exports = router;
