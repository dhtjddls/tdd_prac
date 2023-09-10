const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');
router.get('/greeting', controller.sayHello);

module.exports = router;
