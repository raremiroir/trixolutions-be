// Supabase Queries

import supabase from "$lib/db"


// Insert Queries
export const dbInsert = async(table:string, values = {}) => {
   let { data, error } = await supabase
      .from(table)
      .insert([values])

   if (error) throw new Error (error.message);

   return data;
}