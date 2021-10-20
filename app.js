import express from "express";
import request from "reqeust";

const app = express();

const apiKey = "KuAfG9kOpOrhnsDbmyvzbAjaTNh4yB4O";

app.get("/giphy", (req, res) => {
  request(
    "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY",
    { json: true },
    (err, res, body) => {
      if (err) {
        return console.log(err);
      }
      console.log(body.url);
      console.log(body.explanation);
    }
  );

  res.status(200).send("Made it.");
});

app.listen(3000, (req, res) => {
  console.log("lisenting on port 3000");
});
