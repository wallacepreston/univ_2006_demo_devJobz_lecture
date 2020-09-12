// required modules
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const axios = require('axios');
// middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const KEY = process.env.KEY;
console.log('KEY: ', KEY);

app.get('/harvard', async (req, res, next) => {
  try {
    const {data} = await axios.get(`https://api.harvardartmuseums.org/object?apikey=${KEY}`);
    console.log('data: ', data);
    res.send(data)
  } catch (error) {
    console.error(error);
    res.status(500).send({error})
  }
})

// if someone makes a GET request to our app at this URI: 'bananas' run this code... which ultimately sends back an html string.
app.get('/bananas', (req, res, next) => {
  res.send('<h1>you have reached bananas</h1>')
})

// we can define our desired verb (the method: post, get, patch, delete)
app.post('/bananas', (req, res, next) => {
  res.send({youSentUs: req.body});
})

/* 

Sample request to above route, can be made in console:
fetch('/bananas', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
	},
	body: JSON.stringify({myBananas: 'banana1, banana2'})
}).then((response) => response.json()).then(console.log);

*/

// we can send back JSON instead of an html string
app.get('/apples', (req, res, next) => {
  res.send([
    {bar: 'An apple 🍎 walks into a bar, and the bartender says "We dont serve food here"'},
    {fish: 'What do you get if you cross an apple with a 🦪 shellfish? A crab apple.'},
    {computer: 'What type of a computer does a horse 🐴 like to eat? A Macintosh.'},
  ])
});

// static directory
app.use(express.static('public'));

const port = 8000;
// setting up our app to run indefinitely, listening on our given port.
app.listen(port, function() {
  console.log(`app is started and listening at on port  ${chalk.yellow('http://localhost:') + chalk.green(port)}`)
});
