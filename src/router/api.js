import express from 'express';

import postController from '../controller/post';

const router = express.Router();

router.get('/post', postController.getAllPost);
router.get('/post/latest', postController.getLatestPost);
router.post('/post', postController.createPost);
router.patch('/post/:id', postController.updatePost);
router.delete('/post/:id', postController.deletePost);

export default router;
