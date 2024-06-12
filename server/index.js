import express from "express";
const app = express();
import fetch from "node-fetch";
import cors from "cors";

app.use(cors());
app.get("/search", async (req, res) => {
    const query = req.query.query; // Extract the query parameter from the request
    const response = await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${encodeURIComponent(query)}`);
    res.json(await response.json());
  });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
