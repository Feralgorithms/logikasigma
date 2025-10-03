import express from 'express';

const router = express.Router();

router.get('/tentang-kami', (req,res) => {
    res.render('pages/about-us', 
        {
            title : 'Tentang Logika Sigma', 
            keywords: "tentang kami, logika sigma, platform edukasi IT, belajar coding, belajar pemrograman, tutorial pemrograman, artikel teknologi, kursus IT, pembuatan website, produk digital, layanan IT, visi misi logika sigma, komunitas teknologi, inspirasi coding, edukasi teknologi informasi",
            settings: {
                site_description: "Logika Sigma adalah platform edukasi teknologi informasi yang berfokus pada artikel, tutorial, dan inspirasi coding. Kami hadir untuk membantu siapa saja belajar pemrograman dengan mudah, menyediakan produk digital, layanan pembuatan website, dan kursus IT untuk mendukung perkembangan keterampilan digital.",
                favicon_url: '/img/logo-sigma.png'
            }
        })
} );

export default router;