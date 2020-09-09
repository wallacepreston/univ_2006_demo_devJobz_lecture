/* 
VANILLA JS, NO EXPRESS/SERVER
*/
// we can do anything we normally would in raw JS
console.log('app has started');

/* 
EXPRESS SERVER - Our main use case in this cohort
*/
// we'll need express. pulls in library from node_modules that I installed
const express = require('express');
// instantiates a new app (web server)
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// if someone makes a GET request to our app at this URI: 'bananas' run this code... which ultimately sends back an html string.
app.get('/bananas', (req, res, next) => {
  console.log('something');
  res.send('<h1>you have reached bananas</h1>')
})

// we can define our desired verb (the method: post, get, patch, delete)
app.post('/bananas', (req, res, next) => {
  console.log(req.body);
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
})

// setting up our app to run indefinitely, listening on our given port. The callback is an optional (but great) second parameter.
const port = 6000
app.listen(port, function() {
  console.log(`app is started and listening on port ${port}`)
})