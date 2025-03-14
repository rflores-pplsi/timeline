const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = 5000;
const filePath = path.join(__dirname, "items", "timelineElements.json");

app.use(bodyParser.json());
app.use(cors());

app.get("/api/elements", (req, res) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Error reading file");
    }
    res.send(JSON.parse(data));
  });
});

app.post("/api/elements", (req, res) => {
  const newElement = { ...req.body, id: uuidv4() };
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

app.put("/api/elements/:id", (req, res) => {
  const elementId = req.params.id;
  const updatedElement = req.body;

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Error reading file");
    }
    let elements = JSON.parse(data);
    const elementIndex = elements.findIndex((element) => element.id === elementId);

    if (elementIndex === -1) {
      return res.status(404).send("Element not found");
    }

    elements[elementIndex] = { ...elements[elementIndex], ...updatedElement };

    fs.writeFile(filePath, JSON.stringify(elements, null, 2), (err) => {
      if (err) {
        return res.status(500).send("Error writing file");
      }
      res.send(updatedElement);
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
