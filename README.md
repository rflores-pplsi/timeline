# Project Timeline

This project is a React application that allows users to add and view timeline elements. The timeline elements are saved to and loaded from a JSON file on the server.

## Prerequisites

- Node.js
- npm (Node Package Manager)

## Getting Started

### Backend Setup

1. Create a new file `server.js` in the root of your project:

   ```javascript
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
   ```

2. Create the `items` directory and an initial `timelineElements.json` file:

   ```sh
   mkdir items
   echo "[]" > items/timelineElements.json
   ```

3. Install the necessary dependencies:

   ```sh
   npm install express body-parser
   ```

### Frontend Setup

1. Install Axios:

   ```sh
   npm install axios
   ```

2. Update `App.js` to fetch and save elements using the backend API:

   ```javascript
   import React, { useState, useEffect } from "react";
   import axios from "axios";
   import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
   import "react-vertical-timeline-component/style.min.css";
   import AdminPanel from "./components/AdminPanel";

   const App = () => {
     const [elements, setElements] = useState([]);

     useEffect(() => {
       axios
         .get("/api/elements")
         .then((response) => {
           setElements(response.data);
         })
         .catch((error) => {
           console.error("Error fetching elements:", error);
         });
     }, []);

     const handleSave = (newElement) => {
       axios
         .post("/api/elements", newElement)
         .then((response) => {
           setElements([...elements, response.data]);
         })
         .catch((error) => {
           console.error("Error saving element:", error);
         });
     };

     return (
       <div>
         <AdminPanel onSave={handleSave} />
         <VerticalTimeline>
           {elements.map((element, index) => (
             <VerticalTimelineElement
               key={index}
               className="vertical-timeline-element--work"
               contentStyle={{ background: element["background-color"], color: "#222" }}
               contentArrowStyle={{ borderRight: `7px solid ${element["background-color"]}` }}
               date="Jan '24"
               iconStyle={{ background: "rgb(81, 28, 135)", color: "#222" }}
             >
               <h3 className="vertical-timeline-element-title">{element.title}</h3>
               <h4 className="vertical-timeline-element-subtitle">{element["sub-title"]}</h4>
               <ul>
                 <li>
                   <strong>{element.Items["ticket-number"]}</strong> - {element.Items["ticket-desc"]}
                 </li>
               </ul>
             </VerticalTimelineElement>
           ))}
         </VerticalTimeline>
       </div>
     );
   };

   export default App;
   ```

3. Create `AdminPanel.js` for the form:

   ```javascript
   import React, { useState } from "react";

   const AdminPanel = ({ onSave }) => {
     const [backgroundColor, setBackgroundColor] = useState("");
     const [title, setTitle] = useState("");
     const [subTitle, setSubTitle] = useState("");
     const [ticketNumber, setTicketNumber] = useState("");
     const [ticketDesc, setTicketDesc] = useState("");

     const handleSubmit = (e) => {
       e.preventDefault();
       const newElement = {
         "background-color": backgroundColor,
         title: title,
         "sub-title": subTitle,
         Items: {
           "ticket-number": ticketNumber,
           "ticket-desc": ticketDesc,
         },
       };
       onSave(newElement);
     };

     return (
       <form onSubmit={handleSubmit}>
         <label>
           Background Color:
           <input type="color" value={backgroundColor} onChange={(e) => setBackgroundColor(e.target.value)} />
         </label>
         <label>
           Title:
           <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
         </label>
         <label>
           Sub-Title:
           <input type="text" value={subTitle} onChange={(e) => setSubTitle(e.target.value)} />
         </label>
         <label>
           Ticket Number:
           <input type="number" value={ticketNumber} onChange={(e) => setTicketNumber(e.target.value)} />
         </label>
         <label>
           Ticket Description:
           <textarea value={ticketDesc} onChange={(e) => setTicketDesc(e.target.value)} />
         </label>
         <button type="submit">Add Element</button>
       </form>
     );
   };

   export default AdminPanel;
   ```

### Running the Application

1. Install `concurrently`:

   ```sh
   npm install concurrently --save-dev
   ```

2. Update your [package.json](http://_vscodecontentref_/1) file to include the new script:

   ```json
   {
     "name": "project-timeline",
     "version": "1.0.0",
     "scripts": {
       "start": "concurrently \"npm run server\" \"npm run client\"",
       "server": "node server.js",
       "client": "react-scripts start"
     },
     "dependencies": {
       "axios": "^0.21.1",
       "express": "^4.17.1",
       "body-parser": "^1.19.0",
       "react": "^17.0.2",
       "react-dom": "^17.0.2",
       "react-scripts": "4.0.3",
       "react-vertical-timeline-component": "^3.3.0"
     },
     "devDependencies": {
       "concurrently": "^6.2.1"
     }
   }
   ```

3. Start the backend server and React application:

   ```sh
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

You should now be able to add new timeline elements through the admin panel, and they will be saved to and loaded from the `timelineElements.json` file on the server.
