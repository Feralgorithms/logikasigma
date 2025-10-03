import { supabase } from '../config/db.js';

export const getSettings = async () => {
  const { data, error } = await supabase.from('settings').select('*').limit(1).single();
  if (error) throw error;
  return data;
};
