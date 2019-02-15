const express = require('express');
const massive = require('massive');
require("dotenv").config();
const ctrl = require('./controller.js');
const {CONNECTION_STRING} = process.env;
const app = express();
app.use(express.json());

massive(CONNECTION_STRING).then(db => {
  app.set('db', db);
  console.log('Connected to database');
});

app.get('/api/inventory', ctrl.getAllProducts);

app.post('/api/inventory', ctrl.createProduct);

app.delete('/api/inventory/:id', ctrl.deleteProduct);



let PORT = 4000
app.listen(4000, () => console.log(`Banging on port ${PORT}`))