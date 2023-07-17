const express = require("express");
const cors = require("cors");

const routes = require("./src/routes");

const app = express();

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Parse request body
app.use(express.json());

// Mount routes
app.use("/", routes);

// Start the server
app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
