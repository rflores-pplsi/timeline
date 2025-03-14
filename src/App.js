import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import AdminPanel from "./AdminPanel";
import logo from "./lsus-logo.svg";
import "./App.css";

const App = () => {
  const [elements, setElements] = useState([]);
  const [editingElement, setEditingElement] = useState(null);
  const adminPanelRef = useRef(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/elements")
      .then((response) => {
        setElements(response.data);
      })
      .catch((error) => {
        console.error("Error fetching elements:", error);
      });
  }, []);

  const handleSave = (newElement) => {
    if (editingElement) {
      // Update existing element
      const updatedElements = elements.map((element) =>
        element.id === editingElement.id ? { ...newElement, id: editingElement.id } : element
      );
      setElements(updatedElements);
      axios
        .put(`http://localhost:5000/api/elements/${editingElement.id}`, newElement)
        .then((response) => {
          setEditingElement(null);
        })
        .catch((error) => {
          console.error("Error updating element:", error);
        });
    } else {
      // Add new element
      axios
        .post("http://localhost:5000/api/elements", newElement)
        .then((response) => {
          setElements([...elements, response.data]);
          setEditingElement(null);
        })
        .catch((error) => {
          console.error("Error saving element:", error);
        });
    }
  };

  const handleEdit = (element) => {
    setEditingElement(element);
    adminPanelRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Tasks timeline for QAOPS Test Automation completed by Ray Flores</p>
      </header>
      <div>
        <VerticalTimeline>
          {elements.map((element, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: element["background-color"], color: "#222" }}
              contentArrowStyle={{ borderRight: `7px solid ${element["background-color"]}` }}
              date={element.monthYear}
              iconStyle={{ background: "rgb(81, 28, 135)", color: "#222" }}
            >
              <h3 className="vertical-timeline-element-title">{element.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{element["sub-title"]}</h4>
              <ul>
                {element.Items.map((item, idx) => (
                  <li key={idx}>
                    <strong>{item.ticketNumber}</strong> - {item.ticketDesc}
                  </li>
                ))}
              </ul>
              <button onClick={() => handleEdit(element)}>Edit</button>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
        <div ref={adminPanelRef}>
          <AdminPanel onSave={handleSave} existingElement={editingElement} />
        </div>
      </div>
    </div>
  );
};

export default App;
