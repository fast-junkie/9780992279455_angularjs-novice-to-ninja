const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
  title: 'String',
  permalink: 'String',
  content: 'String',
  tags: 'String',
  keywords: 'String',
  author: { type: String, default: 'Admin' },
  datePublished: { type: Date, default: Date.now },
  comments: [{
    content: 'String',
    author: 'String',
    datePublished: { type: Date, default: Date.now },
  }],
});

module.exports = mongoose.model('Post', postSchema);
