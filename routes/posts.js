const express = require('express');
const Post = require('../models/posts');

const router = express.Router();

router
  .route('/posts')
  .get((req, res) => {
    Post.find((err, posts) => {
      console.info('posts', posts);
      if (err) res.send(err);
      res.json(posts);
    });
  })
  .post((req, res) => {
    const post = new Post(req.body);
    post.save((err) => {
      if (err) res.send(err);
      res.send({ message: 'Post Added' });
    });
  });

router.route('/posts/:id')
  .put((req, res) => {
    Post.findOne({ _id: req.params.id }).exec((err, post) => {
      if (err) res.send(err);
      Object
        .keys(req.body)
        .forEach((k) => {
          post[k] = req.body[k];
        });
      post.save((error) => {
        if (error) res.send(error);
        res.json({ message: 'Post updated!' });
      });
    });
  })
  .get((req, res) => {
    Post.findOne({ _id: req.params.id }).exec((err, post) => {
      if (err) res.send(err);
      res.json(post);
    });
  })
  .delete((req, res) => {
    Post.remove({
      _id: req.params.id,
    }, (err) => {
      if (err) res.send(err);
      res.json({ message: 'Successfully deleted' });
    });
  });

module.exports = router;
