const express = require("express");

const router = express.Router();

const cartpage_1 = require("../controller/cart");

router.get("/cart", cartpage_1.cartpage)

router.post("/addtocart", cartpage_1.cartpost)

module.exports = router