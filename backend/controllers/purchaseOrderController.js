const { PurchaseOrder } = require('../models');

const purchaseOrderController = {
    create: async (req, res) => {
        try {
            const { date, vendorName } = req.body;
            const purchaseOrderItems = [];

            // Process the uploaded CSV file and populate purchaseOrderItems array

            // Insert the purchase order items into the database
            await PurchaseOrder.bulkCreate(purchaseOrderItems);

            res.json({ success: true });
        } catch (error) {
            console.error('Error saving purchase order:', error);
            res.status(500).json({ success: false, error: 'Failed to save purchase order' });
        }
    },
};

module.exports = purchaseOrderController;
