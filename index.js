const express = require("express");

const app = express();

const query = require("./routes/query");
const cartnewpage = require("./routes/cart");

require("./config");

const product = require("./model/product");
const cart = require("./model/add-product")

app.use(express.json());

app.use("/", query)

app.use("/cart", cartnewpage)

// this is the port the backend is listening from
app.listen(5000)
