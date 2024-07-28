import * as React from "react";
import * as data from "../Content/Logs.json";
import Collapsible from "react-collapsible";

export default function LogBookComponent() {
  const records = JSON.parse(JSON.stringify(data));
  return (
    <ul>
      {records.Logs.map((item) => (
        <LogListItem record={item} />
      ))}
    </ul>
  );
}

function LogListItem(props) {
  const record = props.record;
  return (
    <div
      className="Log-item-active"
      style={{ padding: "10px", textAlign: "left" }}
    >
      <Collapsible
        trigger={
          <h3>
            {record.Title} : {record.Location}
          </h3>
        }
      >
        <p>{record.Description}</p>
      </Collapsible>
    </div>
  );
}

function LogComponent(props) {
  const record = props.record;
  return (
    <div className="Log-item-active" style={{ padding: "10px" }}>
      <h3>
        {record.Title} : {record.Location}
      </h3>
      <p>{record.Description}</p>
    </div>
  );
}
