const express = require("express");
const router = express.Router();
const multer = require("multer");
const orderController = require("../../controllers/order/purchaseOrderController");

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Specify the destination directory for uploaded files
    cb(null, "uploads/order");
  },
  filename: function (req, file, cb) {
    // Generate a unique filename for the uploaded file
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// Create multer instance with storage configuration
const upload = multer({ storage: storage });

// Define route for uploading purchase order
router.post(
  "/purchase",
  upload.single("file"),
  orderController.uploadPurchaseOrder
);

module.exports = router;
