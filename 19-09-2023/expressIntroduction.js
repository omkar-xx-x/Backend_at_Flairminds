const express = require('express');
const app = express();

app.get('', (req, res) => {
    res.send("<h1 style=\"background-color: red;\">Hello, this is HOME page....</h1>");
});

app.get('/about', (req, res) => {
    res.send("<h1 style=\"background-color: green;\">Hello, this is ABOUT page....</h1>");
});

app.get('/help', (req, res) => {
    res.send("<h1 style=\"background-color: yellow;\">Hello, this is HELP page....</h1>");
});

app.listen(5000);
