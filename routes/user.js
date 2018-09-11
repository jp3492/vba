const User = require('../models/user')
const config = require('../config')
const jwt = require('jwt-simple')

exports.get = async (req, res) => {
  const { _id } = req.user
  if (req.headers && req.headers.authorization) {
    const decoded = jwt.decode(req.headers.authorization, config.secret)
    const user = await User.findById(decoded.sub)
    res.send(user)
  }
  return res.status(400).send({ error: 'authorization header is missing'})
}
exports.resetPassword = async (req, res) => {
  res.send({ error: 'function not yet implemented' })
}
exports.remove = async (req, res) => {
  const { _id } = req.params
  await User.deleteOne({ _id })
  res.send({ message: `User with id: ${_id} successfully removed` })
}
exports.updateInformation = async (req, res) => {
  const { key, value } = req.body
  const { _id } = req.user
  const updatedUser = await User.findOneAndUpdate({ _id }, { [key]: value }, { new: true })
  res.send(updatedUser)
}
exports.apiKey = async (req, res) => {
  const { _id } = req.user
  res.send({ error: 'functionality not yet implemented' })
}
