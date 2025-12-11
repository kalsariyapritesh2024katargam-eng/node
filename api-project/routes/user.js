var express = require('express');
var router = express.Router();
var controller = require("../controller/user");

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

const upload = multer({ storage: storage })


router.get('/', controller.pageview);

router.post('/createData' , upload.single("profile"), controller.createData)

router.delete('/deleteData/:id', controller.deleteData);

router.patch('/editData/:id',  upload.single("profile"), controller.editData);

module.exports = router;