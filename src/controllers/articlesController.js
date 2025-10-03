import * as articleModel from '../models/articleModel.js';
import * as tagModel from '../models/tagModel.js';
import * as categoryModel from '../models/categoryModel.js';
import * as settingsModel from '../models/settingModel.js'


export const index = async (req, res) => {
  try {
    const settings = await settingsModel.getSettings();
    const articles = await articleModel.getAllArticles();
    const tags = await tagModel.getAllTags();
    res.render('pages/articles', 
      { title: 'Artikel Sigma', 
        keywords: settings.meta_keywords,
        settings, 
        articles,
        tags
      });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
    }
};

export const detail = async (req, res) => {
  try {
    const slug = req.params.slug;
    const article = await articleModel.getArticleBySlug(slug);
    const latest = await articleModel.getLatestArticles();
    const tags = await tagModel.getAllTags();
    const categorys = await categoryModel.getAllCategories();
    const settings = await settingsModel.getSettings(); 

    if (!article) return res.status(404).render('404', { title: 'Artikel Tidak Ditemukan' });

    res.render('pages/articleDetail', 
      { 
        title: article.title, 
        keywords: article.meta_keywords,
        article,
        latest,
        tags,
        categorys,
        settings
      });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

export const getArticlesByTag = async (req, res) => {
  try {
    const tag = req.params.slug;
    const articles = await articleModel.getArticlesByTag(tag);
    const settings = await settingsModel.getSettings(); 

    if (!articles || articles.length === 0) return res.status(404).render('404', 
      { 
        title: `Artikel Dengan Tag ${tag.toUpperCase()} Tidak Ditemukan`, 
        keywords: 'artikel tidak ditemukan'
      });

    res.render('pages/articleByTag', 
      { 
        title: `Artikel dengan Tag ${tag}`,
        keywords: settings.meta_keywords,
        articles
    });

  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

export const getArticlesByCategory = async (req, res) => {
  try {
    const category = req.params.slug;
    const articles = await articleModel.getArticlesByCategory(category);
    const settings = await settingsModel.getSettings(); 


    if (!articles || articles.length === 0) return res.status(404).render('404', { title: `Artikel Dengan Kategori ${category.toUpperCase()} Tidak Ditemukan`,keywords: 'artikel tidak ditemukan'});

    res.render('pages/articlesByCategory', 
      { 
        title: `Artikel dengan category ${category}`,
        keywords: settings.meta_keywords,
        articles 
      });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

