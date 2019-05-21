const express = require('express');
const bodyParser = require('body-parser');

const dragon = require('./routes/dragon.route'); // Imports routes for the dragons

const app = express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.use('/dragons', dragon);

const CONNECTION_URL = "mongodb+srv://dragons123:cgmBl3sa5nCZgDaS@dragons-nwfxm.mongodb.net/test?retryWrites=true";
const DATABASE_NAME = "Tracker";

const uri = "/api/dragons";


let port = 3000;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});