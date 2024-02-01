const axios = require("axios");
const Ticker = require("../models/Ticker");

exports.fetchDataAndStoreInDatabase = async (req, res) => {
  try {
    const response = await axios.get("https://api.wazirx.com/api/v2/tickers");
    const tickersData = Object.values(response.data);
    const top10Tickers = tickersData.slice(0, 10);

    // first delete existing data from database
    const existingData = await Ticker.find();
    if (existingData.length) {
      await Ticker.deleteMany({});
    }
    // insert new data in database
    const flag = await Ticker.insertMany(top10Tickers);

    if (!flag) {
      return res.status(500).json({
        success: false,
        message: "Error while storing data",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Data fetched & stored successfully",
      data: top10Tickers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while fetching & storing data",
    });
  }
};
