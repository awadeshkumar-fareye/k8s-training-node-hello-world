// Require module
const express = require('express');

// Express Initialize
const app = express();
const port = 8000;

app.listen(port, () => {
    console.log('Listening on port 8000');
});

// Define route for /hello_world
app.get('/hello_world', (req, res) => {
    res.send('nodejs Hello World Application');
});