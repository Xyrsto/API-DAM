const epxress = require('express');
const router = epxress.Router();

const ProductController = require('../controllers/productController')

router.post('/', ProductController.create)

module.exports = router;