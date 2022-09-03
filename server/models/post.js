const mongoose = require("mongoose");
const mongodbErrorHandler = require("mongoose-mongodb-errors");

mongoose.plugin(mongodbErrorHandler);

const postSchema = mongoose.Schema({
  userId: { type: String, required: true },
  username:{ type:String, require:true },
  userPic: { type: String},
  message: { type: String, required: true, maxLength: 280},
  imageUrl: { type: String },
  createdAt: { type: Date, default: Date.now },
  modfiedAt: { type: Date, dafault: Date.now },
  likes: { type: Number, required: true },
  dislikes: { type: Number, required: true },
  usersLiked: { type: ["String <userId>"], required: true },
  usersDisliked: { type: ["String <userId>"], required: true },
});

module.exports = mongoose.model("Post", postSchema);
