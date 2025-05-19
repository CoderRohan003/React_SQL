const express = require("express");
const router = express.Router();
const { Likes } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.post("/", validateToken, async (req, res) => {
  const { postId } = req.body;
  const UserId = req.user.id;

  const found = await Likes.findOne({
    where: { postId: postId, userId: UserId },
  });
  if (!found) {
    await Likes.create({ postId: postId, userId: UserId });
    res.json({ liked: true });
  } else {
    await Likes.destroy({
      where: { postId: postId, userId: UserId },
    });
    res.json({ liked: false });
  }
});

module.exports = router;