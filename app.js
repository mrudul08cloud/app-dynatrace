const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello from Dynatrace practice app 🚀');
});

app.get('/slow', (req, res) => {
    setTimeout(() => {
        res.send('Slow response endpoint');
    }, 5000);
});

app.get('/error', (req, res) => {
    res.status(500).send('This is an error endpoint');
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});
