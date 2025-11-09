import db from "#db/client";



// apply files
export async function getFiles() {
    try {
        const sql = `
        SELECT files.*,
        folders.name
        AS folder_name
        FROM files
        JOIN folders 
        ON folders.id = files.folder_id;
        `;
         const { rows: files } = await db.query(sql);
        return files;
    } catch (error) {
       console.error("Error fetching files:", error);
       throw error;
    }
}







// Get folder with files attached


export async function createFile(folder_id, {name, size}) {
    const sql = `
    INSERT INTO files (name, size, folder_id)
    VALUES ($1, $2, $3)
    RETURNING *;
    `;
    const { rows: [file] } = await db.query(sql, [name, size, folder_id]);
    return file;
}