// Create web server
// 1. Load the express module
// 2. Create an instance of the express module
// 3. Create a GET route for the root URL that returns a message
// 4. Create a GET route for the /comments URL that returns a list of comments
// 5. Create a POST route for the /comments URL that adds a new comment
// 6. Create a GET route for the /comments/:id URL that returns a single comment
// 7. Create a PUT route for the /comments/:id URL that updates a single comment
// 8. Create a DELETE route for the /comments/:id URL that deletes a single comment
// 9. Start the server on port 3000

// 1. Load the express module
const express = require('express');
// 2. Create an instance of the express module
const app = express();
// 3. Create a GET route for the root URL that returns a message
app.get('/', (req, res) => {
  res.send('Welcome to the comments service!');
});
// 4. Create a GET route for the /comments URL that returns a list of comments
app.get('/comments', (req, res) => {
  res.send('List of comments');
});
// 5. Create a POST route for the /comments URL that adds a new comment
app.post('/comments', (req, res) => {
  res.send('Add a new comment');
});
// 6. Create a GET route for the /comments/:id URL that returns a single comment
app.get('/comments/:id', (req, res) => {
  res.send('Get a single comment');
});
// 7. Create a PUT route for the /comments/:id URL that updates a single comment
app.put('/comments/:id', (req, res) => {
  res.send('Update a single comment');
});
// 8. Create a DELETE route for the /comments/:id URL that deletes a single comment
app.delete('/comments/:id', (req, res) => {
  res.send('Delete a single comment');
});
// 9. Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// To test the GET route for the root URL, open a web browser and navigate to http://