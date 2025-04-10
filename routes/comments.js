const express = require('express');
const router = express.Router();

const comments = require("../data/comments");
const users = require("../data/users");
const posts= require("../data/posts");
const error = require("../utilities/error");


router.get('/:id', (req,res) => {
    const commentsData = comments.find((c) => c.id ==req.params.id);
    res.json(commentsData)
});


router.patch('/:id', (req, res, next) => {
    const commentsData = comments.find((c, i) => {
      if (c.id == req.params.id) {
        for (const key in req.body) {
          comments[i][key] = req.body[key];
        }
        return true;
      }
    });

    if (commentData) res.json(commentsData);
    else next();
  })

  router.delete('/:id', (req, res, next) => {
    const commentData = comments.find((c, i) => {
      if (c.id == req.params.id) {
        comments.splice(i, 1);
        return true;
      }
    });

    if (commentData) res.json(commentData);
    else next();
  });


  
module.exports = router;

  