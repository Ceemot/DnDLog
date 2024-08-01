import * as React from "react";
import { useState } from "react";
import { Log } from "../Components/Types";

export default function AddLog() {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    entities: "",
    description: "",
  });

  const [outputText, setOutputText] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var logItem: Log = {
      LogId: 3,
      Title: formData.title,
      Location: formData.location,
      Entities: formData.entities.split(","),
      Description: formData.description,
    };
    setOutputText(JSON.stringify(logItem, undefined, 4));
  };
  //Was not sure how to make an array in entities, was thinking a checkbox for party members
  //Also the css on this page is whack
  return (
    <div style={{ marginBlockStart: "0px", padding: "40px" }}>
      <form className="inputForm" onSubmit={handleSubmit}>
        <label className="formLabel" htmlFor="title">
          Title:
        </label>
        <input
          className="formInput"
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <br />
        <br />
        <label className="formLabel" htmlFor="location">
          Location:
        </label>
        <input
          className="formInput"
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
        <br />
        <br />
        <label className="formLabel" htmlFor="entities">
          Entities:
        </label>
        <input
          className="formInput"
          type="text"
          id="entities"
          name="entities"
          value={formData.entities}
          onChange={handleChange}
        />
        <br />
        <br />
        <label className="formLabel" htmlFor="description">
          Description:
        </label>
        <textarea
          className="formInput textArea"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <div>
        <textarea
          id="outputText"
          name="outputText"
          className="theOutput"
          value={outputText}
          readOnly
        />
      </div>
    </div>
  );
}
