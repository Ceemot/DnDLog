import * as React from "react";
import * as data from "../Content/Logs.json";
import Collapsible from "react-collapsible";
import DescriptionText from "./DescriptionText.tsx";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

export default function LogBookComponent() {
  const records = JSON.parse(JSON.stringify(data));
  return (
    <ul style={{ marginBlockStart: "20px" }}>
      {records.logs.map((item) => (
        <LogListItem key={item.logId} record={item} />
      ))}
    </ul>
  );
}

// function LogListItem(props) {
//   const record = props.record;
//   return (
//     <div
//       className="Log-item-active"
//       style={{ padding: "10px", textAlign: "center" }}
//     >
//       <Collapsible
//         trigger={
//           <h3>
//             {record.title} : {record.location}
//           </h3>
//         }
//       >
//         <DescriptionText description={record.description} />
//       </Collapsible>
//     </div>
//   );
// }

function LogListItem(props) {
  const record = props.record;
  return (
    <div>
      <Accordion>
        <AccordionSummary aria-controls="panel-content" id="panel-header">
          <Typography align="center" sx={{ width: "100%" }}>
            {record.title} : {record.location}{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography align="center" sx={{ width: "100%" }}>
            {record.description}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
