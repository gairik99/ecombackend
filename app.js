const express = require("express");
const app = express();
const cors = require("cors");

const storeRoute = require("./routes/storeRoute");
const productRoute = require("./routes/productRoute");
const orderRoute = require("./routes/orderRoute");

app.use(cors());
app.use(express.json());

app.use("/api/v1/store", storeRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/order", orderRoute);
app.get("/", (__, res) => {
  return res.status(200).json({ message: "this is test page" });
});

module.exports = app;
