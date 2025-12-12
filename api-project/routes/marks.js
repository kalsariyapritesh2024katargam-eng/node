var express = require('express');
var router = express.Router();
var controller = require("../controller/marks");

router.get('/', controller.pageview);

router.post('/createData' ,  controller.createData)

router.delete('/deleteData/:id', controller.deleteData);

router.patch('/editData/:id',  controller.editData);

module.exports = router;