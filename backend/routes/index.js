const express = require('express');
const router = express.Router();
const db = require('./db');


// Endpoint for processing the purchase order
router.post('/purchase-order', upload.single('file'), (req, res) => {
    const { date, vendorName } = req.body;
    const purchaseOrderItems = [];

    // Parse the CSV file
    csvParser()
        .on('data', (data) => {
            const { modelNumber, unitPrice, quantity } = data;
            purchaseOrderItems.push({ modelNumber, unitPrice, quantity });
        })
        .on('end', () => {
            // Perform validation and store data in the MySQL database

            // Prepare the query for bulk insert
            const query = 'INSERT INTO purchase_orders (date, vendor_name, model_number, unit_price, quantity) VALUES ?';

            // Format the data for bulk insert
            const values = purchaseOrderItems.map((item) => [
                date,
                vendorName,
                item.modelNumber,
                item.unitPrice,
                item.quantity,
            ]);

            // Execute the bulk insert query
            db.query(query, [values], (err, result) => {
                if (err) {
                    console.error('Error inserting data into MySQL database:', err);
                    res.status(500).json({ success: false, error: 'Failed to insert data into database' });
                    return;
                }

                // Return a response indicating success
                res.json({ success: true });
            });
        })
        .on('error', (error) => {
            console.error('Error parsing CSV:', error);
            res.status(400).json({ success: false, error: 'Failed to parse CSV file' });
        });

    req.file.pipe(csvParser());
});
