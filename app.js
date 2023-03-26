const express = require('express');
const mongoose = require('mongoose');
const app = express ();

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server Has Started`);
});

app.get('/', (req, res) => {
    res.send(`Yayyy! It's working`);
});

require('dotenv').config(); 

app.use(express.urlencoded({ extended: false }));

mongoose.connect(process.env.SERVER, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});