const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// ✅ Root route
app.get('/', (req, res) => {
  res.send('✅ Backend is live and reachable!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
