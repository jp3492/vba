const User = require('./routes/user')
const Project = require('./routes/project')
const Authentication = require('./controllers/authentication')
const passportService = require('./services/passport')
const passport = require('passport')

const requireAuth = passport.authenticate('jwt', { session: false })
const requireLogin = passport.authenticate('local', { session: false })

module.exports = function(app) {
  app.post('/auth/register', Authentication.register)
  app.post('/auth/login', requireLogin, Authentication.login)
  app.get('/auth/user', requireAuth, User.get)
  app.post('/user/resetPassword', User.resetPassword)
  app.delete('/user/:id', requireAuth, User.remove)
  app.post('/user/information', requireAuth, User.updateInformation)
  app.get('/user/apiKey', User.apiKey)

  app.post('/project', requireAuth, Project.create)
  app.get('/project/:_id', Project.get)
  app.get('/project/search*', Project.search)
  app.delete('/project/:_id', requireAuth, Project.remove)
  app.post('/project/information', requireAuth, Project.information)
  app.post('/project/codeTag', requireAuth, Project.addCodeTag)
  app.post('/project/codeTag/update', Project.updateCodeTag)
  app.delete('/project/codeTag/:_id', Project.removeCodeTag)
}
