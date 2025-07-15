// app.js
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const checkGrant = require("./middlewares/authMiddleware")

app.use(express.json());
app.use('/api/users', userRoutes);
app.get('/secure', checkGrant, (req, res) => {
  res.send('Welcome to the secure route.');
});


module.exports = app;
