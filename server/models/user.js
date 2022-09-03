const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
      },
      message: (props) => `L'email ${props.value} n'est pas valide.`,
    },
  },
  password: { type: String, required: true },
  username: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (u) {
        return /^[a-z]{0,12}$/.test(u);
      },
      message: (props) => `le pseudo: ${props.value} n'est pas valide il doit faire moins de 12 carateres`
    },
  },
  isAdmin: { type: Boolean, default: false },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
