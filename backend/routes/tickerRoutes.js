const router = require("express").Router();
const {
  fetchDataAndStoreInDatabase,
} = require("../controllers/tickerController");

router.get("/getTickers", fetchDataAndStoreInDatabase);

module.exports = router;
