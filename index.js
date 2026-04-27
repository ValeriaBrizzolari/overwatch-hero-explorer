import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import { log } from "console";
import { perks } from "./data/perks.js";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const result = await axios.get("https://overfast-api.tekrop.fr/heroes");
    res.render("index.ejs", { hero: result.data });
  } catch (error) {
    console.log(error.response.data);
    res.status(500);
  }
});

app.get("/hero/:heroKey", async (req, res) => {
  const hero = req.params.heroKey;
  const heroPerks = perks[hero];
  try {
    const result = await axios.get(
      `https://overfast-api.tekrop.fr/heroes/${hero}`,
    );
    res.render("hero.ejs", { hero: result.data, perks: heroPerks });
  } catch (error) {
    console.log(error.response.data);
    res.status(500);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
