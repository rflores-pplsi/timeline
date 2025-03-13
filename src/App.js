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
