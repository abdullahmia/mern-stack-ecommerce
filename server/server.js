require('dotenv').config();
const express = require('express');

const app = express();

// Middleware



// Routes
app.get('/', (req, res) => {
    res.send("Hello World");
})



// Server Configuration
const port = process.env.PORT | 8000;
app.listen(port, () => {
    console.log(`Server are playing at ${port}`);
})