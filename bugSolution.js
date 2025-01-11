const express = require('express');
const app = express();
const { Pool } = require('pg'); // PostgreSQL example
const pool = new Pool({ /* ... database connection details ... */ });
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  // Validate and sanitize user input
  if (!user.name || !user.email) {
    return res.status(400).send('Name and email are required');
  }
  // ... other code ...
});

app.get('/users/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  try {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching user');
  }
});
pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err)
    process.exit(-1)
})