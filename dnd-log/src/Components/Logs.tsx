import * as React from "react";
import * as data from "../Content/Logs.json";
import { Logbook, Log } from "./Types.ts";

export default function LogBookComponent() {
  const records = JSON.parse(JSON.stringify(data));
  return (
    <ul>
      {records.Logs.map((item) => (
        <LogComponent record={item} />
      ))}
    </ul>
  );
}

function LogComponent(props) {
  const record = props.record;
  return (
    <div style={{border:"2px solid purple"}}>
      <h1>Title</h1>
      <p>{record.Title}</p>
      <h2>Location</h2>
      <p>{record.Location}</p>
      <h3>Details</h3>
      <p>{record.Description}</p>
    </div>
  );
}
