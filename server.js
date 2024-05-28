const express = require('express')
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require(path.join(__dirname, 'controllers', 'router.js'))

// Mongo DB

async function connect(){
  const mongoConection = `mongodb+srv://${process.env.db_username}:${process.env.db_password}@${process.env.db_string}`;
  let db = mongoose.connection;
  db.on('connecting', () => {
      console.log('Connecting...');
  });
  db.on('connected', () => {
      console.log('Connected succesfully');
  });
  await mongoose.connect(mongoConection, {useNewUrlParser: true});

};

connect();

const server = express();
server.use(express.json());
server.use(cors());
const PORT = process.env.PORT || 3100;

server.use('/', router);

server.get('/', (req, res) => {
  res.send("Hola mundo")
})

server.listen(PORT, () => {
    console.log("server running on port " + PORT);
})
