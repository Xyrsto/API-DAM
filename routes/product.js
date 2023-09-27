const epxress = require('express');
const router = epxress.Router();

const ProductController = require('../controllers/productController')

router.post('/addProduct', ProductController.create)

module.exports = router;