import React, { useState, useEffect } from "react";

const AdminPanel = ({ onSave, existingElement }) => {
  const [backgroundColor, setBackgroundColor] = useState(existingElement ? existingElement["background-color"] : "");
  const [title, setTitle] = useState(existingElement ? existingElement.title : "");
  const [subTitle, setSubTitle] = useState(existingElement ? existingElement["sub-title"] : "");
  const [monthYear, setMonthYear] = useState(existingElement ? existingElement.monthYear : "");
  const [lineItems, setLineItems] = useState(
    existingElement ? existingElement.Items : [{ indexId: 0, ticketNumber: "", ticketDesc: "" }]
  );

  useEffect(() => {
    if (existingElement) {
      setBackgroundColor(existingElement["background-color"] || "");
      setTitle(existingElement.title || "");
      setSubTitle(existingElement["sub-title"] || "");
      setMonthYear(existingElement.monthYear || "");
      setLineItems(existingElement.Items || [{ indexId: 0, ticketNumber: "", ticketDesc: "" }]);
    }
  }, [existingElement]);

  const handleLineItemChange = (index, field, value) => {
    const newLineItems = [...lineItems];
    newLineItems[index][field] = value;
    setLineItems(newLineItems);
  };

  const handleAddLineItem = () => {
    const newIndexId = lineItems.length > 0 ? lineItems[lineItems.length - 1].indexId + 1 : 0;
    setLineItems([...lineItems, { indexId: newIndexId, ticketNumber: "", ticketDesc: "" }]);
  };

  const handleRemoveLineItem = (index) => {
    const newLineItems = lineItems.filter((_, i) => i !== index);
    setLineItems(newLineItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newElement = {
      "background-color": backgroundColor,
      title: title,
      "sub-title": subTitle,
      monthYear: monthYear,
      Items: lineItems,
    };
    onSave(newElement);
    // Reset form state
    setBackgroundColor("");
    setTitle("");
    setSubTitle("");
    setMonthYear("");
    setLineItems([{ indexId: 0, ticketNumber: "", ticketDesc: "" }]);
  };

  return (
    <div className="admin-panel">
      <form onSubmit={handleSubmit}>
        <h2>{existingElement ? "Edit Monthly Block" : "Add New Monthly Block"}</h2>
        <div className="line-items-block left">
          <div className="column">
            <label>Title:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="column">
            <label>Sub-Title:</label>
            <input type="text" value={subTitle} onChange={(e) => setSubTitle(e.target.value)} />
          </div>
          <div className="column">
            <label>Month and Year:</label>
            <input
              type="text"
              value={monthYear}
              onChange={(e) => setMonthYear(e.target.value)}
              placeholder="e.g., Jan '25"
            />
          </div>
        </div>
        <h2>{existingElement ? "Edit Ticket/Description" : "Add New Ticket/Description"}</h2>
        <div className="line-items-block right">
          {lineItems.map((item, index) => (
            <div key={index} className="column">
              <div className="line-item">
                <label>Ticket Number:</label>
                <input
                  type="text"
                  className="ticket-number"
                  value={item.ticketNumber}
                  onChange={(e) => handleLineItemChange(index, "ticketNumber", e.target.value)}
                />
              </div>
              <div className="column">
                <label>Ticket Description:</label>
                <textarea
                  value={item.ticketDesc}
                  onChange={(e) => handleLineItemChange(index, "ticketDesc", e.target.value)}
                />
              </div>
              <button type="button" onClick={() => handleRemoveLineItem(index)}>
                Remove Line Item
              </button>
            </div>
          ))}
          <button type="button" onClick={handleAddLineItem}>
            Add Line Item
          </button>
        </div>
        <button type="submit">{existingElement ? "Update Element" : "Add Element"}</button>
      </form>
    </div>
  );
};

export default AdminPanel;
