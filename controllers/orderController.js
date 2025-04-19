const Order = require("../models/orderModel");
const Product = require("../models/productModel");

const createOrder = async (req, res) => {
  try {
    const { name, product, total } = req.body;

    if (!name || !product || !total || !Array.isArray(product)) {
      return res.status(400).json({ message: "Invalid order data" });
    }

    // Step 1: Deduct qty for each product
    for (const item of product) {
      const prod = await Product.findById(item.id);

      if (!prod) {
        return res
          .status(404)
          .json({ message: `Product with ID ${item.id} not found` });
      }

      if (prod.quantity < item.qty) {
        return res
          .status(400)
          .json({ message: `Not enough stock for product: ${prod.name}` });
      }

      // Deduct the quantity
      prod.quantity -= item.qty;
      await prod.save();
    }

    // Step 2: Save the order
    const newOrder = await Order.create({
      name,
      total,
      product,
    });

    res.status(201).json({
      message: "Order placed successfully",
      order: newOrder,
    });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { createOrder };
