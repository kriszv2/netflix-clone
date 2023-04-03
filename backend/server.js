const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");

dotenv.config();
const PORT = 4000;
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connection was successful"))
  .catch((err) => {
    console.error(err);
  });

app.use(express.json());

app.use(authRoute);

app.listen(4000, () => {
  console.log(`Server is running on port: ${PORT}`);
});
