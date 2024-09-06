import * as React from "react";
import LogBookComponent from "./Logs.tsx";
import AddLog from "./AddLog.tsx";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { AppBar, Typography } from "@mui/material";

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
        <Box>
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
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position="sticky" sx={{ width: "100vw" }}>
        <Typography
          variant="h5"
          component={"div"}
          align="center"
          paddingTop={"10px"}
        >
          DnDLogs
        </Typography>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          textColor="inherit"
          variant="fullWidth"
          aria-label="Logbook"
          TabIndicatorProps={{ style: { backgroundColor: "white" } }}
        >
          <Tab label="View Logs" {...a11yProps(0)} />
          <Tab label="Add Log" {...a11yProps(0)} />
        </Tabs>
      </AppBar>
      <Box sx={{ width: "100vw", overflow: "hidden" }}>
        <CustomTabPanel value={value} index={0} dir="theme.direction">
          <LogBookComponent />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1} dir="theme.direction">
          <AddLog />
        </CustomTabPanel>
      </Box>
    </>
  );
}
