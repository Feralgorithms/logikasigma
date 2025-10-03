import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import path from 'path';
import { fileURLToPath } from 'url';

import homeRoutes from './routes/homeRoutes.js';
import productRoutes from './routes/productRoutes.js'
import articlesRoutes from './routes/articlesRoutes.js'
import aboutRoutes from './routes/aboutRoutes.js'

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// middleware bawaan
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(expressLayouts);
app.set('layout', 'layouts/main');


// folder public
app.use(express.static(path.join(__dirname, '../public')));


// routes
app.use('/', homeRoutes);
app.use('/', productRoutes)
app.use('/', articlesRoutes)
app.use('/', aboutRoutes)


app.use((req, res) => {
  res.status(404).render('404', { 
    title: 'Halaman Tidak Ditemukan' 
  });
});

export default app;