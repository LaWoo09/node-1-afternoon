const express = require("express");
const getProducts = require('./getProducts');
const getProduct = require('./getProduct')
const app = express();
const port = 4000;

app.listen(port, () => console.log(`server listening on port ${port}`))

app.get('/api/products', getProducts);

app.get('/api/product/:id', getProduct);


