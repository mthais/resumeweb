const express = require('express');
const config  = require('./server.config');
const app     = express();
const bodyParser = require('body-parser');
const userHandler = require('./controller/user');
const cors = require('cors');

// Set the build folder as static documents server
app.use(express.static('build'))
app.use(bodyParser.json())
app.use(cors());
app.use(userHandler.middlewareUser)

// Set the / route
app.get('/', (req, res) => res.sendFile('build/index.html'))
app.post('/register', userHandler.register)
app.post('/signin', userHandler.signin)
// Initiate the server
app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`);
});

// End of file
