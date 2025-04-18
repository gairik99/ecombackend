const Store = require("../models/storeModel");

const createStore = async (req, res) => {
  try {
    const store = await Store.create(req.body);
    return res.status(201).json({
      status: "ok",
      data: {
        store,
      },
    });
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

const getAllStores = async (__, res) => {
  try {
    const stores = await Store.find();
    return res.status(200).json({
      status: "ok",
      stores,
    });
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

module.exports = {
  createStore,
  getAllStores,
};
