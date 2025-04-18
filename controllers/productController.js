const Product = require("../models/productModel");

const createProduct = async (req, res) => {
  try {
    const { name, price, quantity, storeName, store } = req.body;

    // You can add basic validation
    if (!name || !price || !quantity || !storeName) {
      return res.status(400).json({ message: "Name and Price are required!" });
    }

    const newProduct = new Product({
      name,
      price,
      quantity,
      storeName,
      store,
    });

    const savedProduct = await newProduct.save();

    res.status(201).json({
      message: "Product created successfully!",
      product: savedProduct,
    });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

const getProductsByStore = async (req, res) => {
  try {
    const { storeId } = req.params;

    if (!storeId) {
      return res.status(400).json({ message: "Store ID is required" });
    }

    const products = await Product.find({ store: storeId });

    res.status(200).json({
      message: "Products fetched successfully",
      count: products.length,
      products,
    });
  } catch (error) {
    console.error("Error fetching products by store:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

module.exports = { createProduct, getProductsByStore };
