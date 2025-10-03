import express from 'express';

const router = express.Router();

router.get('/products', (req,res) => {
    res.render('pages/products', {title : 'Produk Sigma'})
} );

export default router;