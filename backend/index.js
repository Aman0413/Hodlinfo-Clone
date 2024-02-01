const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./config/dbConnection");
const tickerRoutes = require("./routes/tickerRoutes");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5174",
    credentials: true,
  })
);
app.use(express.json());
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// Routes
app.get("/", (req, res) => {
  return res.send("Ok from server");
});

app.use("/api/v1", tickerRoutes);
//connect to database
connectDB();
