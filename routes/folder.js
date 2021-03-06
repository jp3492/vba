const Project = require('../models/project')
const User = require('../models/user')
const Folder = require('../models/folder')

const post = async (req, res) => {
  const { name, description, keyWords, folder } = req.body
  const { _id } = req.user
  const newFolder = new Folder({ name, description, keyWords, folder, _uid: _id })
  await newFolder.save()
  res.send(newFolder)
}

const update = async (req, res) => {
  const { id } = req.params
  const updatedFolder = await Folder.findOneAndUpdate({ _id }, req.body)
  console.log(updatedFolder);
  
  res.send(updatedFolder)
}

const remove = async (req, res) => {
  const { _id } = req.params
  await Folder.deleteOne({ _id })
  res.send({ message: `Folder with id: ${_id} successfully removed`})
}

module.exports = {
  post,
  remove,
  update
}
