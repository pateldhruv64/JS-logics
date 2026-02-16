const express = require('express');

const {
    submituser
} = require ('../Controller/registerController.js');


const router = express.Router();

router.post('/', submituser )

module.exports = router;
