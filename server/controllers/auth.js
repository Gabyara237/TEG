const bcrypt = require("bcryptjs");
const User = require("../models/user");
const jwt = require("../utils/jwt");

function register(req, res) {
  const {
    firstname,
    lastname,
    email,
    password,
    role,
    active,
    country,
    expertise,
    companyname,
  } = req.body;

  if (!email) res.status(400).send({ msg: "El email es obligatorio" });
  if (!password) res.status(400).send({ msg: "La contraseña es obligatoria" });

  const user = new User({
    firstname,
    lastname,
    email: email.toLowerCase(),
    role,
    active,
    country,
    expertise,
    balance: 0,
  });

  // validando si el registro es de una compañia
  if (role == "company") {
    user.companyname = companyname;
  }

  const salt = bcrypt.genSaltSync(10);
  const hashpassword = bcrypt.hashSync(password, salt);
  user.password = hashpassword;

  user.save((error, userStorage) => {
    if (error) {
      res.status(400).send({ msg: "Error al crear el registro de usuario" });
    } else {
      res.status(200).send(userStorage);
    }
  });
}

function login(req, res) {
  const { email, password } = req.body;

  if (!email) res.status(400).send({ msg: "El email es obligatorio" });
  if (!password) res.status(400).send({ msg: "La contraseña es obligatoria" });
  const emailLowerCase = email.toLowerCase();
  //buscamos el usuario en la base de datos
  User.findOne({ email: emailLowerCase }, (error, userStore) => {
    if (error) {
      console.log("error");
      res.status(500).send({ msg: "Error del servidor" });
    } else {
      bcrypt.compare(password, userStore.password, (bcryptError, check) => {
        if (bcryptError) {
          res.status(500).send({ msg: "Error del servidor" });
        } else if (!check) {
          res.status(400).send({ msg: "Correo o contraseña invalida" });
        } else if (!userStore.active) {
          res.status(401).send({ msg: "Usuario no autorizado o no activo" });
        } else {
          res.status(200).send({
            access: jwt.createAccessToken(userStore),
            refresh: jwt.createRefreshToken(userStore),
          });
        }
      });
    }
  });
}

function refreshAcessToken(req, res) {
  const { token } = req.body;
  if (!token) {
    res.status(400).send({ msg: "Token Requerido" });
  }
  const { user_id } = jwt.decoded(token);
  User.findOne({ _id: user_id }, (error, userStorage) => {
    if (error) {
      res.status(500).send({ msg: "Error del servidor" });
    } else {
      res.status(200).send({
        accessToken: jwt.createAccessToken(userStorage),
      });
    }
  });
}

module.exports = {
  register,
  login,
  refreshAcessToken,
};
