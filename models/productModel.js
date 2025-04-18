const { mongoose, Schema } = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A product must have a name"],
  },
  price: {
    type: Number,
    required: [true, "A product must have  price"],
  },
  quantity: {
    type: Number,
    required: [true, "A product must have  a quantity"],
  },
  storeName: {
    type: String,
    required: [true, "A product must associated with a store"],
  },
  store: {
    type: Schema.Types.ObjectId,
    ref: "Store",
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
