const express = require('express');

const app = express();

// LISTEN FOR REQUEST
app.listen(3000);

app.get('/', (req, res) => {
    // res.send('<p>Home Page</p>')
    res.sendFile('./index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
});

// REDIRECTS
app.get('/about-us', (req, res) => {
    res.redirect('/index');
})

// 404
app.use((req, res) => {
    res.status(404).sendFile('./index.html', { root: __dirname });
});