const express = require('express');
const router = express.Router();
const createClass = require("./create.classControllers");
const getClass = require("./get.classControllers");
const putClass = require("./update.classController");
const delClass = require("./delete.classControllers");
const validator = require("../../helpers/validator");

router.get('/', getClass.service);

router.post('/',createClass.validation, validator, createClass.service);

router.get(`/:id`, getClass.service);
router.put('/:id',putClass.validation, validator, putClass.service);
router.delete('/:id', delClass.service);


module.exports = router;