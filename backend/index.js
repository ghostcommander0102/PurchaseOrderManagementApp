const express = require('express');
const cors = require('cors');
const multer = require('multer');
const csvParser = require('csv-parser');
const express = require('express');
const app = express();
const routes = require('./routes');

const upload = multer();

// DB connect
db.connect();

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Register the routes
app.use('/api', routes);


// Endpoint for processing the purchase order
app.post('/api/purchase-order', upload.single('file'), (req, res) => {
    const { date, vendorName } = req.body;
    const purchaseOrderItems = [];

    // Parse the CSV file
    csvParser()
        .on('data', (data) => {
            const { modelNumber, unitPrice, quantity } = data;
            purchaseOrderItems.push({ modelNumber, unitPrice, quantity });
        })
        .on('end', () => {
            // Perform validation and store data in your preferred storage

            // Return a response indicating success or errors
            res.json({ success: true });
        })
        .on('error', (error) => {
            console.error('Error parsing CSV:', error);
            res.status(400).json({ success: false, error: 'Failed to parse CSV file' });
        });

    req.file.pipe(csvParser());
});

// Start the server
app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
