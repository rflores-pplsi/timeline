const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;
const filePath = path.join(__dirname, "items", "timelineElements.json");

app.use(bodyParser.json());

app.get("/api/elements", (req, res) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Error reading file");
    }
    res.send(JSON.parse(data));
  });
});

app.post("/api/elements", (req, res) => {
  const newElement = req.body;
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Error reading file");
    }
    const elements = JSON.parse(data);
    elements.push(newElement);
    fs.writeFile(filePath, JSON.stringify(elements, null, 2), (err) => {
      if (err) {
        return res.status(500).send("Error writing file");
      }
      res.send(newElement);
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
