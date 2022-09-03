const Post = require("../models/post");
const fs = require("fs");
const { json } = require("express");
const { updateOne } = require("../models/post");

exports.getAllPost = (req, res, next) => {
  Post.find().sort([["createdAt", -1]])
    .then((posts) => res.status(200).json(posts))
    .catch((error) => res.status(400).json({ error }));
};

exports.getOnePost = (req, res, next) => {
  Post.findOne({ _id: req.params.id })
    .then((post) => res.status(200).json(post))
    .catch((error) => res.status(404).json({ error }));
};

exports.createPost = (req, res, next) => {
  const postObject = req.body;
  const {userId,username} = req.auth;
  delete postObject._id;
  const post = new Post({
    ...postObject,
    username:username,
    userId: userId,
    likes: 0,
    dislikes: 0,
    usersLiked: [],
    userDisliked: [],
    ...(req.file && {
      imageUrl: `${req.protocol}://${req.get("host")}/images/${
        req.file.filename
      }`,
    }),
  });

  post
    .save()
    .then((doc) => {
      console.log(doc);
      res.status(201).json({ message: "message created", post: doc });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.modifyPost = (req, res, next) => {
  console.log(req.auth);
  const postBody = req.body;
  console.log(req.file);
  const imageUrl = req.file && `${req.protocol}://${req.get("host")}/images/${req.file.filename}`;
  console.log(imageUrl);
  const postObject = req.file
    ? {
        message: postBody.message,
        imageUrl:"",
        ...(req.file && {
          imageUrl,
        }),
      }
    : {
        message: postBody.message,
      };
  Post.findOne({ _id: req.params.id })
    .then((post) => {
      if ((post.userId != req.auth.userId) && !req.auth.isAdmin) {
        res.status(401).json({ message: "Not authorized" });
      } else {
        if ((post.imageUrl && (postBody?.image && postBody?.image !== post.imageUrl)) || (post.imageUrl && !postBody?.image)) {
          const imageUrl = post.imageUrl;
          const imagePath = imageUrl.split("/images/")[1];
          fs.unlink(`./images/${imagePath}`, (err) => {
            if (err) {
              console.error(err);
              return;
            }
            console.log("file removed");
          });
        }
        
        Post.updateOne(
          { _id: req.params.id },
          { ...postObject, _id: req.params.id }
        )
          .then((post) => res.status(200).json({ message: "Post modifie!",post:postObject }))
          .catch((error) => res.status(401).json({ error }));
      }
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.deletePost = (req, res, next) => {
  console.log(req.params.id);
  console.log(req.auth);
  Post.findOne({ _id: req.params.id })
    .then((post) => {
      if ((post.userId != req.auth.userId) && !req.auth.isAdmin) {
        res.status(401).json({ message: "Not authorized" });
      } else {
        if(post.imageUrl) {
          try {
            const imageUrl = post.imageUrl;
            const imagePath = imageUrl.split("/images/")[1];
            fs.unlink(`./images/${imagePath}`, (err) => {
              if (err) {
                console.error(err);
                return;
              }
              console.log("file removed");
            });
          }
          catch (err) {
            console.error(err);
          }
        }
        
        Post.deleteOne({ _id: req.params.id })
        .then(() => {
            res.status(200).json({ message: "Post suprime !" });
        })
        .catch((error) => res.status(401).json({ error }));

      }
    })
    .catch((error) => {
      console.log({error});
      res.status(500).json({ error });
    });
};

exports.likePost = (req, res, next) => {
  const {userId,username} = req.auth;
  Post.findOne({ _id: req.params.id })
    .then((post) => {
      if (post.usersLiked.includes(userId)) {
        Post.updateOne(
          { _id: req.params.id },
          {
            $inc: { likes: -1 },
            $pull: { usersLiked: userId },
          }
        )
          .then(() => res.status(200).json({ message: "Post unliked !" }))
          .catch((error) => res.status(400).json({ error }));
      } else {
        Post.updateOne(
          { _id: req.params.id },
          {
            $inc: { likes: 1 },
            $push: { usersLiked: userId },
            $pull: { usersDisliked: userId },
          }
        )
          .then(() => res.status(200).json({ message: "Post liked !" }))
          .catch((error) => res.status(400).json({ error }));
      }
    })
    .catch((error) => res.status(400).json({ error }));
}