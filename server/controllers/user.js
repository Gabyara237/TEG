const User = require("../models/user");
const bcrypt = require("bcryptjs");
const image = require("../utils/image");

async function getMe(req, res) {
  const { user_id } = req.user;

  const response = await User.findById(user_id);

  if (!response) {
    res.status(400).send({ msg: "No se ha encontrado usuario" });
  } else {
    res.status(200).send(response);
  }
}

async function getUser(req, res) {
  const { id } = req.params;

  const response = await User.findById(id);

  if (!response) {
    res.status(400).send({ msg: "No se ha encontrado usuario" });
  } else {
    res.status(200).send(response);
  }
}

// Muestra todos los usuarios del sistema, y tambien los usuarios activos o no activos
async function getUsers(req, res) {
  const { role } = req.query;
  let response = null;
  if (role === undefined) {
    response = await User.find(); //Me muestra todos los usuarios
  } else {
    response = await User.find({ role }); // Regresa activos o inactivos
  }
  res.status(200).send(response);
}

function createUser(req, res) {
  const { password } = req.body;

  const user = new User({ ...req.body });
  const salt = bcrypt.genSaltSync(10);

  const hashPassword = bcrypt.hashSync(password, salt);
  user.password = hashPassword;

  if (req.files.avatar) {
    const imagePath = image.getFilePath(req.files.avatar);
    user.avatar = imagePath;
  }

  user.save((error, userStored) => {
    if (error) {
      console.log(error);
      res.status(400).send({ msg: "Error al crear el usuario" });
    } else {
      res.status(200).send(userStored);
    }
  });
}

function updateUser(req, res) {
  const { id } = req.params;
  const userData = req.body;

  //Actualizaciones en el Password- Garantizamos que se actualice de forma encriptada
  if (userData.password) {
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(userData.password, salt);
    userData.password = hashPassword;
  } else {
    delete userData.password;
  }

  //Avatar
  if (req.files.avatar) {
    const imagePath = image.getFilePath(req.files.avatar);
    userData.avatar = imagePath;
  }

  User.findByIdAndUpdate({ _id: id }, userData, (error) => {
    if (error) {
      res.status(400).send({ msg: "Error al actualizar el usuario" });
      console.log(error);
    } else {
      res.status(200).send({ msg: "Actualización correcta" });
    }
  });
}

function deleteUser(req, res) {
  const { id } = req.params;
  User.findByIdAndDelete(id, (error) => {
    if (error) {
      res.status(400).send({ msg: "Error al eliminar el usuario" });
    } else {
      res.status(200).send({ msg: "Usuario eliminado" });
    }
  });
}

module.exports = {
  getMe,
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
