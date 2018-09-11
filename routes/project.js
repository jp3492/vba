const Project = require('../models/project')
const User = require('../models/user')

const create = async (req, res) => {
  const { name, description, keyWords, links } = req.body
  const { _id } = req.user
  const newProject = new Project({ name, description, keyWords, links, _uid: _id })
  await newProject.save()
  res.send(newProject)
}
const get = async (req, res) => {
  const { id } = req.params
  const project = await Project.find({ id })
  res.send(project)
}
const search = async (req, res) => {
  res.send({ error: 'functionality not yet implemented' })
}
const remove = async (req, res) => {
  const { _id } = req.params
  await Project.deleteOne({ _id })
  res.send({ message: `Project with id: ${_id} successfully removed` })
}
const information = async (req, res) => {
  const { _id, key, value } = req.body
  const updatedProject = await Project.findOneAndUpdate({ _id }, { [key]: value }, { new: true })
  res.send(updatedProject)
}
const addCodeTag = async (req, res) => {
  const { _id, codeTag } = req.body
  const updatedProject = await Project.findOneAndUpdate({ _id }, { $push: { tags: codeTag } }, { new: true })
  res.send(updatedProject)
}
const updateCodeTag = async (req, res) => {
  const { _id, _tid, key, value } = req.body
  console.log(req.body);
  const updatedProject = await Project.findOneAndUpdate({ _id, 'tags._id': _tid }, { 'tags.$':{ $set: { [key]: value } } }, { new: true })
  res.send(updatedProject)
}
const removeCodeTag = async (req, res) => {
  const { _id, _tid } = req.body
  const updatedProject = await Project.findOneAndUpdate({ _id }, { $pull: { tags: { _id: _tid } } })
  res.send(updatedProject)
}

module.exports = {
  create,
  get,
  search,
  remove,
  information,
  addCodeTag,
  updateCodeTag,
  removeCodeTag
}
