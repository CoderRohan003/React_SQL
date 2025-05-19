const express = require('express');
const router = express.Router();
const { Posts } = require("../models");

// GET all Lists
router.get("/", async (req, res) => {
    const allPosts = await Posts.findAll(); 
    res.json(allPosts);

});

// GET A Single Posts
router.get("/byId/:id", async (req, res) => {
    const id = req.params.id;
    const post = await Posts.findByPk(id);
    res.json(post);
});


//* POST || LOGIN FORM ->> DB
router.post("/", async (req, res) => {
    const post = req.body;
    await Posts.create(post);   // Posts and post both schema must be in same format;
    res.json(post);
})




module.exports = router;