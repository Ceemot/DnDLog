import * as React from "react";
import { useState } from "react";
import { Log } from "../Components/Types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

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
      logId: 3,
      title: formData.title,
      location: formData.location,
      entities: formData.entities.split(","),
      description: formData.description,
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
        <Box alignItems={"center"} display={"flex"}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={2} textAlign={"left"}>
              <label className="formLabel" htmlFor="title">
                Title:
              </label>
            </Grid>
            <Grid item xs={10}>
              <input
                className="formInput"
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={2} textAlign={"left"}>
              <label className="formLabel" htmlFor="location">
                Location:
              </label>
            </Grid>
            <Grid item xs={10}>
              <input
                className="formInput"
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={2} textAlign={"left"}>
              <label className="formLabel" htmlFor="entities">
                Entities:
              </label>
            </Grid>
            <Grid item xs={10}>
              <input
                className="formInput"
                type="text"
                id="entities"
                name="entities"
                value={formData.entities}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={2} textAlign={"left"}>
              <label className="formLabel" htmlFor="description">
                Description:
              </label>
            </Grid>
            <Grid item xs={10}>
              <textarea
                className="formInput textArea"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={2} />
            <Grid item xs={10}>
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </Grid>
            <Grid item xs={2} />
            <Grid item xs={10}>
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
            </Grid>
          </Grid>
        </Box>
      </form>
    </div>
  );
}
