const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
global.Item = require('./api/models/itemModel');
global.Member = require('./api/models/memberModel');
const memberRoutes = require('./api/routes/memberRoute');
const itemRoutes = require('./api/routes/itemRoute');
const cors = require('cors');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/CameraBox', { useNewUrlParser: true });

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


memberRoutes(app);
itemRoutes(app);

app.listen(port);

app.use((req, res) => {
  res.status(404).send({ url: req.originalUrl + ' not found' });
});

console.log('RESTful API server started on: ' + port);
console.log(`Server started on port http://localhost:${port}`);
