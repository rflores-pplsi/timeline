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
