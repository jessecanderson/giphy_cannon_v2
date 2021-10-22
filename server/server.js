import express from "express";
import axios from "axios";
import slack from "@slack/bolt";

const app = express();

app.get("/giphy", (req, res) => {
  let apiKey = process.env.GIPHY_API_KEY;
  axios
    .get(`http://api.giphy.com/v1/gifs/search`, {
      params: {
        api_key: apiKey,
        q: "Princess Bride",
        limit: 3,
      },
    })
    .then((giphyResponse) => {
      console.log(giphyResponse.data.data);
      res.status(200).send(giphyResponse.data.data);
    })
    .then((error) => {
      console.log(error);
    });
});

app.listen(3000, (req, res) => {
  console.log("lisenting on port 3000");
});
