// Create a web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Use body-parser to parse the body of the request
app.use(bodyParser.urlencoded({ extended: true }));

// Use the static files in the public directory
app.use(express.static('public'));

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Create an array to store the comments
let comments = [];

// Display the comments
app.get('/comments', (req, res) => {
    res.render('comments', { comments: comments });
});

// Add a comment
app.post('/comments', (req, res) => {
    let comment = req.body.comment;
    comments.push(comment);
    res.redirect('/comments');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});