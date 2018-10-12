const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');
require('dotenv').config();

massive( process.env.CONNECTION_STRING ).then(database =>{
    app.set('db', database);
}).catch(error=>{
    console.log('error with connection string', error);
});

const app = express();
app.use(bodyParser.json());


app.listen(4000, ()=>{
    console.log('Server is listening on port 4000! 💞')
});

app.get('/api/inventory', controller.getProducts);
app.post('/api/inventory', controller.createProduct);