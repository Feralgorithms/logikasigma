import express from 'express';
import * as articlesController from '../controllers/articlesController.js';
import * as homeController from '../controllers/homeController.js';

const router = express.Router();

router.get('/category/:slug', articlesController.getArticlesByCategory);
router.get('/tag/:slug', articlesController.getArticlesByTag);
router.get('/article/:slug', articlesController.detail);
router.get('/articles', articlesController.index);


export default router;