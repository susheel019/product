const express = require('express');
var app = express();
const productRouter = require('./routes/products');

const Connection = require('./BLL/connection');


app.use('/products' , productRouter);

app.listen('7080', '127.0.0.1' , ()=>{
   Connection.initializeConnection();
   console.log('server is running at http://127.0.0.1:7080');
});