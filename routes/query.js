const express = require("express");

const router = express.Router();

const queryroute = require("../controller/query");

router.get("/", queryroute.getpage);

router.post("/post", queryroute.postproduct);

router.get("/search/:key", queryroute.getquery)

module.exports = router