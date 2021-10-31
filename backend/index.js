const express = require("express");

const app = express();

const cors = require("cors");

const dotenv = require("dotenv");

const user = require("./Routes/user");

const auth = require("./Routes/auth");

const product = require("./Routes/product");

const order = require("./Routes/order");

const cart = require("./Routes/cart");

dotenv.config();

const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

app.use(cors())

app.use(express.json());

app.use("/api/user", user);

app.use("/api/auth", auth);

app.use("/api/product", product);

app.use("/api/order", order);

app.use("/api/cart", cart);

app.listen(process.env.PORT || 5000, () => {
  console.log("server is running on port 5000");
});
