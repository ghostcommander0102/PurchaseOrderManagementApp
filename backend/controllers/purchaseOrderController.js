const  {PurchaseOrder}  = require('../models/purchaseOrder');
const csv = require('csv-parser');
const fs = require('fs');

exports.uploadPurchaseOrder = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const results = [];

        fs.createReadStream(req.file.path)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', async () => {
                // Process the CSV data and save it to the database
                for (const result of results) {
                    const purchaseOrder = {
                        modelNumber: result['Model Number'],
                        unitPrice: parseFloat(result['Unit Price']),
                        quantity: parseInt(result['Quantity']),
                        date: req.body.date,
                        vendorName: req.body.vendorName,
                    };

                    await PurchaseOrder.create(purchaseOrder);
                }

                // Remove the uploaded file
                fs.unlinkSync(req.file.path);

                return res.status(200).json({ message: 'Purchase orders saved successfully' });
            });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
