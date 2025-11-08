import db from "#db/client";

// Get all folders
export async function getFolders() {
    const 
    { rows } = await db.query("Select * FROM folders");
    return rows;
}