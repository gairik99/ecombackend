const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProductsByStore,
} = require("../controllers/productController");
router.route("/").post(createProduct);
router.route("/:storeId").get(getProductsByStore);

module.exports = router;
