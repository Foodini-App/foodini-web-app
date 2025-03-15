// To run: node utils/supabase/upload-dishes.mjs

import fs from "fs";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrl = "https://uuerbbttczwcxujoviko.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1ZXJiYnR0Y3p3Y3h1am92aWtvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwOTM2NDUxNiwiZXhwIjoyMDI0OTQwNTE2fQ.ZmtZwezxi2yG7zxqAqu0a3-tYy4Vk5jMbHzXv9ZuwHE";
const supabase = createClient(supabaseUrl, supabaseKey);

function trimString(string) {
  const index = string.indexOf(".");
  if (index !== -1) {
    return string.substring(0, index);
  }
  return string;
}

// Function to upload images to Supabase bucket
async function uploadImages(folderPath) {
  try {
    // Read the contents of the folder
    const files = fs.readdirSync(folderPath);

    // Iterate over each file in the folder
    for (const file of files) {
      // Read the file as binary data
      const fileData = fs.readFileSync(`${folderPath}/${file}`);
      const bucketFolderName = trimString(file);
      const bucketFilePath = `${bucketFolderName}/${file}`;

      // Upload the file to Supabase bucket
      const { data, error } = await supabase.storage
        .from("dishes")
        .upload(`${bucketFilePath}`, fileData);

      if (error) {
        console.error(`Error uploading ${file}: ${error.message}`);
      } else {
        console.log(`Successfully uploaded ${file}`);
      }
      console.log(bucketFilePath);
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Usage: Call the uploadImages function with the folder path
const folderPath = "/Users/darre/Desktop/Foodini/dishes/images/chinese/chinese_1";
uploadImages(folderPath);
