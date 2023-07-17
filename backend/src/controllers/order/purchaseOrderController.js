const purchaseOrderService = require("../../services/order/purchaseOrderService");
const purchaseOrderFileService = require("../../services/order/purchaseOrderFileService");

exports.uploadPurchaseOrder = async (req, res) => {
  try {
    const { date, vendorName } = req.body;

    // Check if a file is uploaded
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // Read the purchase order file
    const fileData = await purchaseOrderFileService.readPurchaseOrderFile(
      req.file.path
    );

    // Check if file data is valid
    if (!fileData || fileData.length === 0) {
      return res.status(400).json({ error: "Invalid file data" });
    }

    // Create purchase orders
    await purchaseOrderService.createPurchaseOrders(fileData, date, vendorName);

    // Return success response
    return res.status(200).json({
      message: "Purchase orders saved successfully",
      success: true,
    });
  } catch (error) {
    console.error("Error:", error);

    // Return error response
    return res.status(500).json({ error: "Internal server error" });
  }
};
