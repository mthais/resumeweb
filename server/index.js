const result = require('dotenv').config()
const express = require("express");
const config = require("./server.config");
const app = express();
const bodyParser = require("body-parser");
const userHandler = require("./controller/user");
const model = require("../models")
const LinkedinStategy = require("passport-linkedin").Strategy;
const cors = require("cors");
const passport = require("passport")
const { linkedin, secret } = require("../config/secrets");
const session = require("express-session");
const LocalStrategy = require("passport-local").Strategy

if (result.error) {
    throw result.error
}
// Set the build folder as static documents server
app.use(express.static("build"))
app.use(passport.initialize())
app.use(session({ secret: secret }))
app.use(bodyParser.json())
app.use(cors());
app.use(userHandler.middlewareUser)

passport.use(new LinkedinStategy(linkedin, function (token, tokenSecret, profile, done) {
    model.User.findOrCreate({
        where: {
            name: profile.displayName,
            email: profile.email,
        }
    })
        .spread((data, created) => {
            const user = data[0]
            const now = Math.floor(Date.now() / 1000);
            user.iat = now
            user.exp = now + (60 * 60 * 24 * 7)
            done(null, user)
        })
}))

passport.serializeUser(function (user, done) {
    done(null, user);
})

passport.deserializeUser(function (obj, done) {
    done(null, obj);
})

passport.use(new LocalStrategy(userHandler.basicAuth))

app.get("/auth/linkedin", passport.authenticate("linkedin"))
// Set the / route
app.get("/", (req, res) => res.sendFile("build/index.html"))
app.post("/register", userHandler.register)
app.post("/login", userHandler.logIn)
// Initiate the server
app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`);
});
