import * as React from "react";
import { useState } from "react";

export default function AddLog() {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    entities: [""],
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Title: ${formData.title}, Location: ${formData.location}, Entities: ${formData.entities}, Description: ${formData.description}`
    );
  };
  //Was not sure how to make an array in entities, was thinking a checkbox for party members
  //Also the css on this page is whack
  return (
    <div style={{ marginBlockStart: "0px", padding: "40px" }}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="entities">Entities:</label>
        <input
          type="text"
          id="entities"
          name="entities"
          value={formData.entities}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
