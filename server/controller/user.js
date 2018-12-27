const model = require('../../models')
const bcrypt = require('bcrypt')
const jwt = require('jwt-simple')
const { secret, linkedin } = require('../../config/secrets')
const passport = require('passport')

exports.register = async (req, res) => {
  const newUser = req.body
  newUser.password = bcrypt.hashSync(req.body.password, 10)
  model.User.build(newUser).save()
    .then(data => {
      data.password = undefined
      res.status(201).json(data)
    }).catch(err => {
      res.status(500).send(err)
    })
}

exports.signin = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res.status(400).send('Informe o email ou senha')
    }
    const user = await model.User.findOne({ where: {
      email: req.body.email
    } })

    if (!user) return res.status(401).send('Usuário não encontrado!')
    const isMatched = bcrypt.compareSync(req.body.password, user.password)
    if (!isMatched) return res.status(401).send('Email/Senha inválido')

    const now = Math.floor(Date.now() / 1000)
    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
      iat: now,
      exp: now + (60 * 60 * 24 * 7)
    }

    res.json({
      ...payload,
      token: jwt.encode(payload, secret)
    })
  }
  catch (err) {
    res.stats(500).send(err)
  }
}

exports.loginRequired = function (req, res, next) {
  if (req.user) {
    next()
  }
  else {
    return res.status(401).json({ message: 'Unathorizated user' })
  }
}

exports.middlewareUser = function (req, res, next) {
  if (req.headers && req.headers.authorization &&
        req.headers.authorization.split(' ')[0] === 'Bearer') {
    jwt.verify(req.headers.authorization.split(' ')[1], secret, function (err, decode) {
      if (err) req.user = undefined
      if (new Date(decode.exp * 1000) > new Date()) {
        req.user = decode
        next()
      }
      else {
        res.status(401).send('Session expired')
      }
    })
  }
  else {
    req.user = undefined
    next()
  }
}

exports.basicAuth = function (email, password, done) {
  model.User.findOne({ where: {
    email
  } }).then(user => {
    const isMatched = bcrypt.hashSync(password, user.password)
    if (!isMatched) return done(null, false, { message: 'Incorrect password!' })
    return done(null, user)
  }).catch(err => done(err))
}

exports.logIn = function (req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    if (err) {
      return next(err)
    }
    if (!user) {
      return res.redirect(linkedin.callbackURL)
    }
    req.logIn(user, function (err) {
      if (err) {
        return next(err)
      }
      return res.redirect(linkedin.callbackURL)
    })
  })(req, res, next)
}
