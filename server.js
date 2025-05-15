// server.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, DevOps!');
});

// Export app for testing purposes
module.exports = app;

// Start server only if the file is not imported (i.e., it's being run directly)
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}
