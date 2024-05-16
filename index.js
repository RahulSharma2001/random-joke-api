const express = require("express");
const axios = require("axios");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the Random Image API!");
});

app.get("/api/joke/random", async (req, res) => {
  try {
    const response = await axios.get(
      "https://official-joke-api.appspot.com/random_joke"
    );

    res.send(response.data.setup + " !!!! " + response.data.punchline);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch a random Joke" });
  }
});

app.listen(5000, () => console.log("server running"));
