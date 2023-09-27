const epxress = require('express');
const router = epxress.Router();

const ProductController = require('../controllers/productController')
const upload = require('../config/multer')

router.post('/', upload.single("file"), ProductController.create)

module.exports = router;