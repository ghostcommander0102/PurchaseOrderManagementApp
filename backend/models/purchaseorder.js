const { PurchaseOrder } = require('../models');
const csvParser = require('csv-parser');

const purchaseOrderController = {
    create: async (req, res) => {
        try {
            const { date, vendorName } = req.body;
            const purchaseOrderItems = [];

            // Parse the uploaded CSV file
            req.pipe(req.busboy);
            req.busboy.on('file', (fieldname, file, filename) => {
                file.pipe(csvParser())
                    .on('data', (data) => {
                        // Process each row of the CSV file
                        const { modelNumber, unitPrice, quantity } = data;

                        // Create a purchase order item
                        const purchaseOrderItem = {
                            modelNumber,
                            unitPrice: parseFloat(unitPrice),
                            quantity: parseInt(quantity),
                            date: new Date(date),
                            vendorName,
                        };

                        purchaseOrderItems.push(purchaseOrderItem);
                    })
                    .on('end', async () => {
                        // Insert the purchase order items into the database
                        await PurchaseOrder.bulkCreate(purchaseOrderItems);

                        res.json({ success: true });
                    });
            });
        } catch (error) {
            console.error('Error saving purchase order:', error);
            res.status(500).json({ success: false, error: 'Failed to save purchase order' });
        }
    },
};

module.exports = purchaseOrderController;
