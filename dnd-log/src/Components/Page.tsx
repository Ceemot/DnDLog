import * as React from "react";
import LogBookComponent from "./Logs.tsx";
import { useState } from "react";
import AddLog from "./AddLog.tsx";

export default function Page() {
  const [pageMode, setPageMode] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        {pageMode === 0 ? "DnD Logs" : "Add Records"}
      </header>
      <div className="Navigation">
        <ul>
          <li onClick={() => setPageMode(0)}>DnD Logs</li>
          <li onClick={() => setPageMode(1)}>Add Records</li>
        </ul>
      </div>
      <div className="App-body">
        {pageMode === 0 ? <LogBookComponent /> : <AddLog />}
      </div>
    </div>
  );
}
