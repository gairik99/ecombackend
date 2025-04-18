const express = require("express");
const router = express.Router();
const { createStore, getAllStores } = require("../controllers/storeController");
router.route("/").post(createStore).get(getAllStores);

module.exports = router;
