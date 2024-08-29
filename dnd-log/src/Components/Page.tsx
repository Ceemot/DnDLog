import * as React from "react";
import LogBookComponent from "./Logs.tsx";
import { useState } from "react";
import AddLog from "./AddLog.tsx";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { AppBar, makeStyles, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-panel-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-panel-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
export default function TabManager() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: `flex`,
        flex: `1`,
        bgcolor: "black",
        height: "100%",
        width: "100%",
        position: "relative",
      }}
    >
      <AppBar position="fixed">
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="Logbook"
          style={{ background: "black" }}
        >
          <Tab label="View Logs" {...a11yProps(0)} />
          <Tab label="Add Log" {...a11yProps(0)} />
        </Tabs>
      </AppBar>
      <CustomTabPanel value={value} index={0} dir="theme.direction">
        <LogBookComponent />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1} dir="theme.direction">
        <AddLog />
      </CustomTabPanel>
    </Box>
  );
}

// export default function Page() {
//   const [pageMode, setPageMode] = useState(0);

//   return (
//     <div className="App">
//       <header className="App-header">
//         {pageMode === 0 ? "DnD Logs" : "Add Records"}
//       </header>
//       <div className="Navigation">
//         <ul>
//           <li onClick={() => setPageMode(0)}>DnD Logs</li>
//           <li onClick={() => setPageMode(1)}>Add Records</li>
//         </ul>
//       </div>
//       <div className="App-body">
//         {pageMode === 0 ? <LogBookComponent /> : <AddLog />}
//       </div>
//     </div>
//   );
// }
