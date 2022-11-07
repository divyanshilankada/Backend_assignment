const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const ProductRoute = require('./routes/productRoute.js');
const OrderRoute = require('./routes/orderRoute');
const CustomerRoute = require('./routes/cutomerRoute');



app.use(bodyParser());
app.use("/product", ProductRoute);
app.use("/order", OrderRoute);
app.use("/customer", CustomerRoute);



module.exports = app;