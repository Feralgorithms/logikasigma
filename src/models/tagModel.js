import { supabase } from '../config/db.js';

export const getAllTags = async () => {
  const { data, error } = await supabase.from('tags').select('*');
  if (error) throw error;
  return data;
};

