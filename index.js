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
const chalk = require('chalk');
/* 
NEW: morgan is logging middleware.  Runs for every request, since it's at the top. Gives us information about the request and response.
*/
const morgan = require('morgan');
app.use(morgan('dev'));
// body-parser is necessary for getting the `body` sent over with a request (i.e. the `body` from the fetch request)
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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
});

/* 
NEW! STATIC DIRECTORY
*/
// We can set up a static directory.  This basically says "treat `./public` as if it were the root of a directory. Give them anything they ask for here, as long as it exists in this directory!" 
// most commonly used for: (1) HTML file, (2) CSS file, (3) images, (4) frontend javascript file like `app.js` that will be loaded and run from the html file.
app.use(express.static('public'));

// setting up our app to run indefinitely, listening on our given port. The callback is an optional (but great) second parameter.
const port = 8000;
// chalk colors our terminal with fun colors!!
app.listen(port, function() {
  console.log(`app is started and listening on ${chalk.yellow('localhost:')} ${chalk.green(port)}`);
});
