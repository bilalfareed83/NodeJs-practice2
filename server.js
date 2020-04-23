const express = require('express');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log('first middleware called');
  console.log(req.body);
  next();
});

app.get('/', (req, res) => {
  res.send('Welcome home page this is GET api');
});

app.get('/login', (req, res) => {
  res.send('This is login page');
});

app.post('/signup', (req, res) => {
  const { fname, lname } = req.body;
  res.send(`My first name is ${fname} and my Last name is ${lname}.`);
});

app.listen(3001, () => {
  console.log('server is running');
});
