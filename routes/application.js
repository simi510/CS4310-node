var express = require('express');
var passport = require('passport');
var path = require('path');
var Application = require('../models/applicaion');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('application');
});

module.exports = router;