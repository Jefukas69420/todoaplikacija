
const express = require('express');// Terminal -> npm install express --save
const bodyParser = require('body-parser');
const cors = require("cors"); // Terminal -> npm install cors
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())
// Middleware
app.use(bodyParser.json());

// Sample data
const books = [
  { id: 1, title: 'Book 1', author: 'Author 1' },
  { id: 2, title: 'Book 2', author: 'Author 2' },
  { id: 3, title: 'Book 3', author: 'Author 3' }
];

// Routes
app.post('/api/book', (req, res) => {
  console.log(req.body)
  res.json(books); // Send books array as JSON
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
