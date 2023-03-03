const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
require('body-parser').json()

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

// const DATABASE_URL = process.env.DATABASE_URL;

// mongoose.set('strictQuery', false);
// mongoose.connect(DATABASE_URL, {})
// const db = mongoose.connection;
// db.on('error', error => console.error(error));
// db.once('open', () => console.log('Database Connection Established'));

app.use(express.json())
app.get('/', (req, res) => {
    res.send("I got it working!")
  });

app.use(express.static(path.join(__dirname, '../reactjs/build')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../reactjs/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})