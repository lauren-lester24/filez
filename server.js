import app from "#app";
import db from "#db/client";

const PORT = process.env.PORT ?? 3000;

await db.connect();

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
<<<<<<< HEAD


=======
>>>>>>> 99272a07fd467af1f009bd4199987d98ff8accb9
