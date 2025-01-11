const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  // Missing validation or sanitization of user data
  // ... other code ...
});

// Vulnerable to SQL injection if directly used in query
app.get('/users/:id', (req, res) => {
  const id = req.params.id; 
  // Vulnerable code, use parameterized queries instead.
  db.query(`SELECT * FROM users WHERE id = ${id}`, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching user');
    } else {
      res.json(results);
    } 
  });
});