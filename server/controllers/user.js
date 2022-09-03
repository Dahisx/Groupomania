// Hide password w/ Bcrypt
const bcrypt = require("bcrypt");
// generate securise token bearer
const jswToken = require("jsonwebtoken");
const User = require("../models/User");

exports.signup = (req, res, next) => {
  try {
    const regex = new RegExp(
      /^(?=.{8,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\W).*$/,
      "i"
    );
    if (!regex.test(req.body.password)) throw "Mot de passe non valide.";
    bcrypt
      .hash(req.body.password, 10)
      .then((hash) => {
        const user = new User({
          email: req.body.email,
          password: hash,
          username: req.body.username,
          isAdmin: req.body.isAdmin,
        });
        user.validateSync();
        user
          .save()
          .then((user) => res.status(201).json({
            message: "Utilisateur créé avec succès !",
            user,
            token: jswToken.sign(
              { 
                userId: user._id,
                username:user.username,
                isAdmin: user.isAdmin,
              },
              process.env.PASSPHRASE,
              { expiresIn: "12h" }
            )
          }))
          .catch((error) => res.status(400).json({ error: error.message }));
      })
      .catch((error) => res.status(500).json({ error }));
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};

exports.login = (req, res, next) => {
  User.findOne({
    email: req.body.email,
  })
    .then((user) => {
      if (user === null) {
        res
          .status(401)
          .json({ message: "Idenditfiant ou mot de passe incorrecte !" });
      } else {
        bcrypt
          .compare(req.body.password, user.password)
          .then((valid) => {
            if (!valid) {
              res
                .status(401)
                .json({ message: "Identifiant ou mot de passe incorrecte !" });
            } else {
              res.status(200).json({
                userId: user._id,
                username:user.username,
                isAdmin: user.isAdmin,
                token: jswToken.sign(
                  { 
                    userId: user._id,
                    username:user.username,
                    isAdmin: user.isAdmin,
                  },
                  process.env.PASSPHRASE,
                  { expiresIn: "12h" }
                ),
              });
            }
          })
          .catch((error) => res.status(500).json({ error }));
      }
    })
    .catch((error) => res.status(500).json({ error }));
};
