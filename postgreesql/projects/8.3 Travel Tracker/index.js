import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "115371",
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function checkVisited() {
  const results = await db.query("select country_code from visited_countries");
  const countries = [];

  results.rows.forEach((country) => countries.push(country.country_code));
  console.log("rows in the results: ", results.rows);

  return countries;
}

app.get("/", async (req, res) => {
  //Write your code here.
  const countries = await checkVisited();
  // console.log(countries);
  res.render("index.ejs", { countries: countries, total: countries.length });
});

app.post("/add", async (req, res) => {
  const { country } = req.body;

  try {
    const results = await db.query(
      "select country_code from countries where lower(country_name) like '%' || $1 || '%'",
      [country.toLowerCase()]
    );

    const data = results.rows[0];
    const countrycode = data.country_code;
    try {
      await db.query(
        "insert into visited_countries (country_code) values ($1)",
        [countrycode]
      );

      res.redirect("/");
    } catch (error) {
      console.log(error);
      const countries = await checkVisited();
      res.render("index.ejs", {
        countries,
        total: countries.length,
        error: "Country has already been added, try again",
      });
    }
  } catch (error) {
    console.log(error);
    const countries = await checkVisited();
    res.render("index.ejs", {
      countries,
      total: countries.length,
      error: "Country name does not exist, try again",
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
