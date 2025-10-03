import express from 'express';
import * as homeController from '../controllers/homeController.js';
import * as articlesController from '../controllers/articlesController.js';

const router = express.Router();

router.get('/', homeController.index);


export default router;