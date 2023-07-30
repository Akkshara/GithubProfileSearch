import logo from "./logo.svg";
import "./App.css";
import Searchsec from "./components/Searchsec";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar checked={darkMode} change={() => setDarkMode(!darkMode)} />
      <Searchsec />
    </ThemeProvider>
  );
}

export default App;
