import express from "express";
import axios from "axios";

const app = express();

const apiKey = "KuAfG9kOpOrhnsDbmyvzbAjaTNh4yB4O";

app.get("/giphy", (req, res) => {
  axios
    .get(`http://api.giphy.com/v1/gifs/search`, {
      params: {
        api_key: apiKey,
        q: "Princess Bride",
        limit: 3,
      },
    })
    .then((giphyResponse) => {
      console.log(giphyResponse);
    })
    .then((error) => {
      console.log(error);
    });
  res.status(200).send("Made it.");
});

app.listen(3000, (req, res) => {
  console.log("lisenting on port 3000");
});
