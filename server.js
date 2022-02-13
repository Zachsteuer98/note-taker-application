// const notes = require('./data/db.json');
// const route = require('./routes/htmlRouters')

const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

const htmlRoutes = require('./routes/htmlRouters')

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use('/', htmlRoutes);

app.use(express.static('public'));

// app.get('/api/notes', (req, res) => {
//     res.json(notes);
//   });

  app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });