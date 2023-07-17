// router.js
const express = require("express");
const router = express.Router();
const orderRouter = require("./order/orderRouter");

router.use("/api/order", orderRouter);

module.exports = router;
