const express = require('express');
const router = express.Router();
const upload = require('../config/multer')

const productController = require('../controllers/productController')


router.post('/', upload.single("file"), productController.create)

module.exports = router;