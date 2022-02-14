const notes = require('./data/db.json');

const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const htmlRoutes = require('./routes/htmlRouters');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static('public'));

app.get('/api/notes', (req, res) => {
  res.json(notes);
});

app.post('/api/notes', (req, res) => {
  console.log('333')
  var newNote = req.body
  newNote.id = uuidv4()
  notes.push(newNote)
  fs.writeFile('./data/db.json', JSON.stringify(notes), (err) => {
    if (err) {
      console.log(err)
    } else {
      res.json(newNote)
    }
  })
})

app.use('/', htmlRoutes);

  app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });