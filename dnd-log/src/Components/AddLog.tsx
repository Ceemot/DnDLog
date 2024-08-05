import * as React from "react";
import { useState } from "react";
import { Log } from "../Components/Types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

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

  const notify = () =>
    toast.success("Text copied", {
      theme: "dark",
      position: "bottom-center",
      autoClose: 1500,
      hideProgressBar: false,
    });

  return (
    <div style={{ marginBlockStart: "0px", padding: "40px" }}>
      <form className="inputForm" onSubmit={handleSubmit}>
        <Box width={400} alignItems={"center"} display={"flex"}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <label className="formLabel" htmlFor="title">
                Title:
              </label>
            </Grid>
            <Grid item xs={6}>
              <input
                className="formInput"
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <label className="formLabel" htmlFor="location">
                Location:
              </label>
            </Grid>
            <Grid item xs={6}>
              <input
                className="formInput"
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <label className="formLabel" htmlFor="entities">
                Entities:
              </label>
            </Grid>
            <Grid item xs={6}>
              <input
                className="formInput"
                type="text"
                id="entities"
                name="entities"
                value={formData.entities}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <label className="formLabel" htmlFor="description">
                Description:
              </label>
            </Grid>
            <Grid item xs={6}>
              <textarea
                className="formInput textArea"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <button type="submit">Submit</button>
            </Grid>
          </Grid>
        </Box>
      </form>
      <div>
        <textarea
          id="outputText"
          name="outputText"
          className="theOutput"
          value={outputText}
          readOnly
          onClick={async () => {
            if ("clipboard" in navigator) {
              navigator.clipboard
                .writeText(",\n" + outputText) // Using .then can skip the await
                .then(() => notify());
            }
          }}
        />
        <ToastContainer />
      </div>
    </div>
  );
}
