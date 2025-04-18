const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A store must have a name"],
  },
  location: {
    type: String,
    required: [true, "A store must have a location"],
  },
});

const Store = mongoose.model("Store", storeSchema);
module.exports = Store;
