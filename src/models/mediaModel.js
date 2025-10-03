import { supabase } from '../config/db.js';

export const getAllMedia = async () => {
  const { data, error } = await supabase.from('media').select('*');
  if (error) throw error;
  return data;
};
