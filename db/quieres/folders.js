import db from "#db/client";

// Get all folders
export async function getFolders() {
    try {
          const sql = `
    SELECT *
    FROM folders
    `
   const { rows: folders } = await db.query(sql);
   return folders
    } catch (error) {
        console.error(`Error Fetching Folders`, error);
 }
    }
  

export async function getFolderByIdWithFiles(id) {
    try {
        const sql = `
        SELECT folders.*,
        (
        SELECT json_agg(files)
        FROM files
        WHERE files.folder_id = folders.id
        ) AS files
         FROM folders
         WHERE id = $1
`;
const { rows: [ folder ] } = await db.query(sql, [id]);
    return folder || null;

    } catch (error) {
        console.error("Error Fetching Folder with Files", error);
        throw error;
    }
    
}

//get folder by id

export async function getFolderById(id) {
  try {
    const sql = `
    SELECT * 
    FROM folders
    WHERE id = $1
 `;
 const { rows } = await db.query(sql, [id]);
 return rows[0] || null;
    } catch (error) {
  console.error(`Error getting Folder by ID: ${error}`);
    throw error;
}
}

// //Check if folder exsist
// export async function getFolderExists(id) {
//       try {
//     const sql = `
//     SELECT 1 
//     FROM folders
//      WHERE id = $1
//      `;
//      const { rows } = await db.query(sql, [id]);
//      return rows.length > 0;
//     } catch (error) {
//   console.error(`Folder does not exists: ${error}`);
//     throw error;
// }
// }