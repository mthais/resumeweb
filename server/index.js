const express = require('express');
const config  = require('./server.config');
const app     = express();

// Set the build folder as static documents server
app.use(express.static('build'))

// Set the / route
app.get('/', (req, res) => res.sendFile('build/index.html'))

// Initiate the server
app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`);
});

// End of file
