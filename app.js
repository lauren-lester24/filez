import express from "express";
<<<<<<< HEAD
// import { getFolders } from "./db/queries/folders.js";

const app = express();


app.use(express.json());

//GET /files -- all files with folder_name
app.get("/files", async (req, res) => {
try {
    const files = await getFiles();
    res.json(files);
} catch (error) {
    console.error(error);
    res.status(500).json({error: "Internal server error"});
}
});



//GET /folders
app.get("/folders", async (req, res) => {
try {
    const folders = await getFolders();
    res.json(folders);
} catch (error) {
    console.error(error);
    res.status(500).json({error: "Interal server error"});
}

});





// GET /folders/:id
app.get("/folders/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const folder = await getFolderById(id);
        if(!folder) return res.status(404).json({ error: "Folder not found"});
        res.json(folder);
    } catch (error) {
        res.status(500).json({ error: "Internal server Error"});
    }
})



// POST /folder/:id/files

app.post("/folders/:id/files", async (req, res) => {
try {
    const { id } = req.params;
    const folderExists = await getFolderExists(id);
    if (!folderExists) return res.status(404).json({ error: "Folder not found"});

        const{ name, size } = req.body || {};
        if(!req.body) return res.status(400).json({ error: "Missing required fields: name and size"});

        const newFile = await createFile(id, { name, size });
        res.status(201).json(newFile);
} catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error"});
}



})






=======
const app = express();
>>>>>>> 99272a07fd467af1f009bd4199987d98ff8accb9
export default app;
