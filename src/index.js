"use strict";
exports.__esModule = true;
var express_1 = require("express");
var connection_1 = require("./connection");
var app = (0, express_1["default"])();
var port = 3201;
app.get('/', function (_, res) {
    res.status(200).send();
});
app.listen(port, function () {
    (0, connection_1["default"])();
    console.log("Running on port ".concat(port));
});
