const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

// EXPRESS APP
const app = express();

// CONNECT TO MONGODB
const dbURI = 'mongodb://localhost:27017/cardealership';
mongoose.connect(dbURI)
.then((result) => console.log('Conected to DB'))
.catch((error) => console.log(error));

// REGISTER VIEW ENGINE
app.set('view engine', 'ejs');

// LISTEN FOR REQUEST
app.listen(3000, 'localhost/Car-Dealership-Manager', () => {
    console.log('Server UP')
});

// MIDDLEWARE & STATIC FILES
app.use(express.static('public'))

// MORAGAN LOGGER
app.use(morgan('dev'));


app.get('/', (req, res) => {
    // res.send('<p>Home Page</p>')
    res.render('index');
});

app.get('/about', (req, res) => {
});

// REDIRECTS
app.get('/about-us', (req, res) => {
    res.redirect('/index');
})

// 404
app.use((req, res) => {
    res.status(404).render('index');
});