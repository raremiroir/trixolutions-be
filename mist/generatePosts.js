// file system module to perform file operations
import fs from 'fs';
import supabase from '../src/lib/db.js'

const getData = async () => {
   const {data, error} = await supabase
      .from('blog_posts')
      .select(`
         *, 
         img ( name, folder, type ),
         author ( first_name, last_name, img )`)
      .order('created_at', { ascending: false });

   if (error) throw new Error(error.message);

   const jsonData = JSON.stringify(data);
   const dataObject = JSON.parse(jsonData);
   fs.writeFile("posts.json", dataObject, 'utf8', function (err) {
      if (err) {
         console.log("An error occured while writing JSON object to file.")
         return console.log(err)
      }
      console.log("JSON has been saved to file.")
   })
}

getData();