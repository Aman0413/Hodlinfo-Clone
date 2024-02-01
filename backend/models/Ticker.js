const mongoose = require("mongoose");

const TickerSchema = new mongoose.Schema({
  base_unit: String,
  quote_unit: String,
  low: String,
  high: String,
  last: String,
  type: String,
  open: String,
  volume: String,
  sell: String,
  buy: String,
  at: Number,
  name: String,
});

module.exports = mongoose.model("Ticker", TickerSchema);
