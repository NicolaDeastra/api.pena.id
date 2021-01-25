import { Post } from '../models';

class postController {
  static getAllPost = async (req, res) => {
    try {
      const post = await Post.findAll({});

      res.status(200).json({ message: 'Success get Post', post });
    } catch (error) {
      res.status(500).json({ message: 'Failure get Post' });
    }
  };

  static getLatestPost = async (req, res) => {
    const { limit = 10 } = req.query;

    try {
      const post = await Post.findAll({
        limit: limit,
        order: [['createdAt', 'DESC']],
      });

      res.status(200).json({ post });
    } catch (error) {
      res.status(500).json({ message: 'failure get post' });
    }
  };

  static createPost = async (req, res) => {
    const { title, body } = req.body;

    try {
      const post = await Post.create({ title, body });

      res.status(200).json({ message: 'Create Post Success', post });
    } catch (error) {
      res.status(500).json({ message: 'Create Post failure', error });
    }
  };

  static updatePost = async (req, res) => {
    const {
      body: { title, body },
      params: { id },
    } = req;

    try {
      const post = await Post.findOne({ where: { id } });

      if (!post) {
        throw new Error('post not found');
      }
      await post.update({ title, body }, { where: { id } });

      res.status(200).json({ message: 'success update post' });
    } catch (error) {
      res.status(500).json({ message: 'failure update post', error });
    }
  };

  static deletePost = async (req, res) => {
    const { id } = req.params;

    try {
      const post = await Post.destroy({ where: { id } });

      if (!post) {
        throw new Error('Post not found');
      }

      res.status(200).json({ message: 'Delete Post Success' });
    } catch (error) {
      res.status(500).json({ message: 'Delete Post failure', error });
    }
  };
}

export default postController;
