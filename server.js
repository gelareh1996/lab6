const express = require('express');
//const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const noteRouter = require('./routes/NoteRoutes.js');

//const DB_URL = "mongodb+srv://Mina:minamina@comp3123.2pj6o.mongodb.net/db_note?retryWrites=true&w=majority"
const app = express();
//app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//mongoose.Promise = global.Promise;

// TODO - Update your mongoDB Atals Url here to Connect to the database
// mongoose.connect(DB_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log("Successfully connected to the database mongoDB Atlas Server");    
// }).catch(err => {
//     console.log('Could not connect to the database. Exiting now...', err);
//     process.exit();
// });


app.get('/', (req, res) => {
    res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
});
mongoose.connect('mongodb+srv://Mina:minamina@comp3123.2pj6o.mongodb.net/db_note?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(noteRouter);
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});