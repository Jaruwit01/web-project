const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
global.item = require('./api/models/itemModel');
const routes = require('./api/routes/itemRoute');

mongoose.connect('mongodb://localhost:27017/Sasom', {useNewUrlParser: true});

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);
app.listen(port);

app.use((req, res) => {
    res.status(404).send({url: req.originalUrl + ' not found'})
})

console.log('Sasom RESTful API server started on: ' + port);
