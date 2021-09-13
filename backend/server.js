import express from "express"; //express is the web server
import data from "./data";

const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

//start the server
app.listen(5000, () => {
  console.log("Server stareted at http://localhost:5000");
});
