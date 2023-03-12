// Supabase Queries

import supabase from "$lib/db"

// Select Queries

export const dbSelect = async(table:string, select:string = '*') => {
   const { data, error } = await supabase
      .from(table)
      .select(select);

   if (error) throw new Error(error.message)
   else return data;
}

export const dbSelectOrder = async(table:string, select:string = '*', order:string, ascending:boolean = false) => {
   const { data, error } = await supabase
      .from(table)
      .select(select)
      .order(order, { ascending: ascending });

   if (error) throw new Error(error.message)
   else return data;
}

export const dbSelectFilter = async(table:string, select: string = '*', filter: any[] = []) => {
   const { data, error } = await supabase
      .from(table)
      .select(select)
      .eq(filter[0], filter[1]);

   if (error) throw new Error(error.message)
   else return data;
}

// Insert Queries
export const dbInsert = async(table:string, values = {}) => {
   let { data, error } = await supabase
      .from(table)
      .insert([values])

   if (error) throw new Error (error.message)
   else return data;
}