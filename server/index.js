// server.js or index.js

const express = require('express');
const app = express();

// Optional: Middleware
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.status(200).send('✅ Backend is live and running!');
});

// Optional: Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is listening on port ${PORT}`);
});
