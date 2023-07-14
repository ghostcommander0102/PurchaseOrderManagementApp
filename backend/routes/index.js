const express = require('express');
const router = express.Router();
const purchaseOrderController = require('../controllers/purchaseOrderController');

router.post('/api/purchase-order', purchaseOrderController.create);

module.exports = router;
