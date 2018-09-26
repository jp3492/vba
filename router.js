const User = require('./routes/user')
const Project = require('./routes/project')
const Folder = require('./routes/folder')

const Authentication = require('./controllers/authentication')
const passportService = require('./services/passport')
const passport = require('passport')

const requireAuth = passport.authenticate('jwt', { session: false })
const requireLogin = passport.authenticate('local', { session: false })

module.exports = function(app) {
  app.post('/auth/register', Authentication.register)
  app.post('/auth/login', requireLogin, Authentication.login)
  app.get('/auth/user', requireAuth, User.get)

  app.post('/api/user/resetPassword', requireAuth, User.resetPassword)
  app.delete('/api/user/:id', requireAuth, User.remove)
  app.post('/api/user/information', requireAuth, User.updateInformation)
  app.get('/api/user/apiKey', requireAuth, User.apiKey)

  app.post('/api/folder', requireAuth, Folder.post)
  app.post('/api/folder/:id', requireAuth, Folder.update)
  app.delete('/api/folder/:id', requireAuth, Folder.remove)

  app.post('/api/project', requireAuth, Project.create)
  app.get('/api/project/:_id', Project.get)
  app.get('/api/project/search*', Project.search)
  app.delete('/api/project/:_id', requireAuth, Project.remove)
  app.post('/api/project/information', requireAuth, Project.information)
  app.post('/api/project/codeTag', requireAuth, Project.addCodeTag)
  app.post('/api/project/codeTag/update', Project.updateCodeTag)
  app.delete('/api/project/codeTag/:_id', Project.removeCodeTag)
}
