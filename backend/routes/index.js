const express = require('express');
const router = express.Router();
const multer = require('multer');
const purchaseOrderController = require('../controllers/purchaseOrderController');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Specify the destination directory for uploaded files
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        // Generate a unique filename for the uploaded file
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

router.post('/api/purchase-order', upload.single('file'), purchaseOrderController.uploadPurchaseOrder);

module.exports = router;
