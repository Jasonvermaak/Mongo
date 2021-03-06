let express = require('express');
let exphbs = require('express-handlebars');
let mongoose = require('mongoose');

let MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mongoHeadlines';

let db = require('./models');

const PORT = process.env.PORT || 8080;

let app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
