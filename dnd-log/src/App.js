import "./App.css";
import Page from "./Components/Page.tsx";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
  <ThemeProvider theme={darkTheme}>
    <CssBaseline/>
<Page />
  </ThemeProvider>);
}

export default App;
