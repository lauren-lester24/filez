import db from "#db/client";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
<<<<<<< HEAD
 try {
  await db.query("DELETE FROM files");
  await db.query("DELETE FROM folders");

  const folders = ["Documents", "Pictures", "Music"];


for (const folderName of folders) {
const { rows } = await db.query(
"INSERT INTO folders (name) VALUES ($1) RETURNING id",
[folderName]
);
const folderId = rows[0].id;


  for (let i =1; i<=5; i++) {
    await db.query(
      "INSERT INTO files (name, size, folder_id) VALUES ($1, $2, $3)",
       [`${folderName}-file${i}`, i * 100, folderId]
    );
  }
}
  
 } catch (error) {
      console.error("Error seeding database:", error);
 }
=======
  // TODO
>>>>>>> 99272a07fd467af1f009bd4199987d98ff8accb9
}
