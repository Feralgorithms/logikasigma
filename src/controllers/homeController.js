import * as articleModel from '../models/articleModel.js';
import * as tagModel from '../models/tagModel.js';
import * as categoryModel from '../models/categoryModel.js';
import * as settingsModel from '../models/settingModel.js'


export const index = async (req, res) => {
  try {
    const articles = await articleModel.getAllArticles();
    const tags = await tagModel.getAllTags();
    const categorys = await categoryModel.getAllCategories();
    const settings = await settingsModel.getSettings();
    res.render('pages/home', 
      { 
      title: 'Beranda Sigma',
      keywords: settings.meta_keywords,
      articles,
      tags,
      categorys,
      settings
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};