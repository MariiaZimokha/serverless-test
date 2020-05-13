// import InMemoryFriends from './memory'

const InMemoryFriends = require('./memory')
const friendsList = new InMemoryFriends();

const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index', {
        personList: friendsList.getAll()
    });
});

app.post('/submit', (req, res) => {
    friendsList.add(req.body.friendName);
    res.render('person-added', { 
        personName: req.body.friendName, 
        personList: friendsList.getAll()
    });
 });

module.exports = app;
