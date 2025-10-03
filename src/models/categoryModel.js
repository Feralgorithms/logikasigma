import { supabase } from '../config/db.js';

export const getAllCategories = async () => {
  const { data, error } = await supabase.from('categories').select('*');
  if (error) throw error;
  return data;
};