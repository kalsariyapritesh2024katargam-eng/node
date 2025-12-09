const express = require('express');
const router = express.Router();

const TC = require('../controller/test');

router.get('/', TC.pageview);

router.get('/createData', TC.createData);

router.get('/deleteData/:id', TC.deleteData);

router.get('/editData/:id', TC.editData);

module.exports = router;
