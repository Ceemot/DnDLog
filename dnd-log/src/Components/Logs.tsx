import * as React from "react";
import * as data from "../Content/Logs.json";
import DescriptionText from "./DescriptionText.tsx";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

export default function LogBookComponent() {
  const records = JSON.parse(JSON.stringify(data));
  return (
    <ul style={{ padding: "0px", margin: "0px" }}>
      {records.logs.map((item) => (
        <LogListItem key={item.logId} record={item} />
      ))}
    </ul>
  );
}

function LogListItem(props) {
  const record = props.record;
  const description = DescriptionText(record);
  return (
    <div>
      <Accordion>
        <AccordionSummary
          aria-controls="panel-content"
          id="panel-header"
          sx={{
            "&hover": {
              backgroundColor: "white",
            },
          }}
        >
          <Typography align="center" sx={{ width: "100%" }}>
            {record.title} : {record.location}{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography align="center" sx={{ width: "100%" }}>
            {description}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
