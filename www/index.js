const express = require('express')
const app = express()
const consign = require('consign');

consign()
    //.include("db.js")
    .then("middlewares.js")
    .then("boot.js")
    .then("routes")
    .into(app)