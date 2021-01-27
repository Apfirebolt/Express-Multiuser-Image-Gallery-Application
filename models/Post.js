const mongoose = require('mongoose');

const commentSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    comment: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
)

const postSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    gallery: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Gallery',  
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    comments: [commentSchema],
  },
  {
    timestamps: true,
  }
)

const Post = mongoose.model('Post', postSchema)

module.exports.Post = Post;
