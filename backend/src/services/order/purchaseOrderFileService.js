const csv = require("csv-parser");
const fs = require("fs");

/**
 * Read purchase order file and parse its contents as CSV
 * @param {string} filePath - Path to the purchase order file
 * @returns {Promise<Array>} - Promise that resolves to an array of parsed CSV data
 */
exports.readPurchaseOrderFile = (filePath) => {
  return new Promise((resolve, reject) => {
    const results = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", () => {
        resolve(results);
      })
      .on("error", (error) => {
        reject(error);
      });
  });
};

/**
 * Delete a file from the file system
 * @param {string} filePath - Path to the file to be deleted
 */
exports.deleteFile = (filePath) => {
  try {
    fs.unlinkSync(filePath);
    console.log("File deleted successfully");
  } catch (error) {
    console.error("Error deleting file:", error);
  }
};
