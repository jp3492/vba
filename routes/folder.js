const Project = require('../models/project')
const User = require('../models/user')
const Folder = require('../models/folder')

const add = async (req, res) => {
  const { name, description, keyWords, folder } = req.body
  const { _id } = req.user
  const newFolder = new Folder({ name, description, keyWords, folder, _uid: _id })
  await newFolder.save()
  res.send(newFolder)
}

const update = async (req, res) => {
  const { _id, key, value } = req.body
  const updatedFolder = await Folder.findOneAndUpdate({ _id }, { [key]: value }, { new: true })
  res.send(updatedFolder)
}

const remove = async (req, res) => {
  const { _id } = req.params
  await Folder.deleteOne({ _id })
  res.send({ message: `Folder with id: ${_id} successfully removed`})


module.exports = {
  add,
  remove,
  update
}
