const { PurchaseOrder } = require("../../models/order/purchaseOrder");

/**
 * Create purchase orders in the database
 * @param {Array} fileData - Array of purchase order data
 * @param {string} date - Date for the purchase orders
 * @param {string} vendorName - Vendor name for the purchase orders
 * @throws {Error} - If failed to create purchase orders
 */
exports.createPurchaseOrders = async (fileData, date, vendorName) => {
  try {
    // Iterate over each data row and create a purchase order
    for (const result of fileData) {
      const order = {
        modelNumber: result["Model Number"],
        unitPrice: parseFloat(result["Unit Price"]),
        quantity: parseInt(result["Quantity"]),
        date,
        vendorName,
      };

      await PurchaseOrder.create(order);
    }
  } catch (error) {
    throw new Error("Failed to create purchase order");
  }
};
