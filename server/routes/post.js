const express = require("express");
const postCtrl = require("../controllers/post");
const multer = require("../middleware/multer-config");
const auth = require("../middleware/auth");


const router = express.Router();

router.get("/", auth, postCtrl.getAllPost);
router.get("/:id", auth, postCtrl.getOnePost);
router.post("/",auth, multer, postCtrl.createPost);
router.put("/:id", auth, multer, postCtrl.modifyPost);
router.put("/:id/like", auth, postCtrl.likePost);
router.delete("/:id", auth, postCtrl.deletePost),


module.exports = router ;
