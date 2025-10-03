import { supabase } from '../config/db.js';

export const getAllArticles = async () => {
  const { data, error } = await supabase
    .from('articles')
    .select(`
      title,
      slug,
      excerpt,
      cover_image,
      published_at,
      users (name),
      article_tags (
        tags (name, slug)
      ),
      article_categories (
        categories (name, slug)
      )
    `)
    .eq('status', 'published')
    .order('published_at', { ascending: false });

  if (error) throw error;
  return data;
};


export const getArticleBySlug = async (slug) => {
  const { data, error } = await supabase
    .from('articles')
    .select(`
      title,
      slug,
      content,
      excerpt,
      cover_image,
      published_at,
      meta_keywords,
      users (id, name),
      article_tags (
        tags (name, slug)
      ),
      article_categories (
        categories (name, slug)
      )
    `)
    .eq('slug', slug)
    .maybeSingle();

  if (error) throw error;
  return data;
};

export const getArticlesByTag = async (slug) => {
const { data: tag, error: tagError } = await supabase
  .from('tags')
  .select('id')
  .eq('slug', slug)
  .maybeSingle();

if (tagError) throw tagError;
if (!tag) return [];

const { data, error } = await supabase
  .from('articles')
  .select(`
    title,
    slug,
    excerpt,
    cover_image,
    published_at,
    meta_keywords,
    users (name),
    article_tags!inner (
      tags (name, slug)
    )
  `)
  .eq('status', 'published')
  .eq('article_tags.tag_id', tag.id)
  .order('published_at', { ascending: false });

if (error) throw error;
return data;
};


export const getArticlesByCategory = async (categorySlug) => {
  const { data: category, error: catError } = await supabase
    .from('categories')
    .select('id')
    .eq('slug', categorySlug)
    .maybeSingle();

  if (catError) throw catError;
  if (!category) return [];


  const { data, error } = await supabase
    .from('articles')
    .select(`
      title,
      slug,
      excerpt,
      cover_image,
      published_at,
      meta_keywords,
      users (name),
      article_categories!inner (
        categories (name, slug)
      ),
      article_tags (
      tags (name, slug)
    )
    `)
    .eq('status', 'published')
    .eq('article_categories.category_id', category.id)
    .order('published_at', { ascending: false });

  if (error) throw error;
  return data;
};

export const getLatestArticles = async (limit = 4) => {
  const { data, error } = await supabase
    .from('articles')
    .select(`
      title,
      slug,
      excerpt,
      cover_image,
      published_at
    `)
    .eq('status', 'published')
    .order('published_at', { ascending: false })
    .limit(limit);

  if (error) throw error;
  return data || [];
};