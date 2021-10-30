const express = require('express');
const router = express.Router();
const routesClass = require("../controllers/classess/routes")


router.use("/class", routesClass)


module.exports = router;