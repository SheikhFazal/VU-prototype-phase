import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./features/home";
// import AboutMe from "./features/about-me";
// import Skills from "./features/skills";
import LinearProgress from "@mui/material/LinearProgress";

import {
  Box,
  CssBaseline,
  IconButton,
  ThemeProvider,
  Toolbar,
  createTheme,
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Suspense, lazy, useState } from "react";
import "./app.css";
import NavBar from "./components/nav";
import CustomDrawer from "./components/drawer";
const Home = lazy(() => delayForDemo(import("./features/home")));
const AboutMe = lazy(() => delayForDemo(import("./features/about-me")));
const Skills = lazy(() => delayForDemo(import("./features/skills")));

function delayForDemo(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 1500);
  }).then(() => promise);
}
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  // const darkTheme = createTheme({
  //   palette: {
  //     mode: "dark",
  //     primary: {
  //       main: "#1976d2",
  //     },

  const navItems = [
    { id: 1, title: "Home", links: "/" },
    { id: 2, title: "About Me", links: "about-me" },
    { id: 3, title: "Skills", links: "skills" },
    { id: 4, title: "Projects", links: "projects" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const lightTheme = createTheme({
    palette: {
      mode: "light",
      // primary: {
      //   main: "",
      // },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#b60444",
      },
    },
  });
  const transitionDuration = 800; 

  const theme = darkMode ? darkTheme : lightTheme;
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box
          sx={{
            display: "flex",
            transition: `background-color ${transitionDuration}ms ease`,
            backgroundColor: theme.palette.background.default,
            minHeight: "100vh",
            bgcolor:theme.palette.background.default
          }}
        >
          <CssBaseline />
          <NavBar handleDrawerToggle={handleDrawerToggle} navItems={navItems} />
          <nav>
            <CustomDrawer
              handleDrawerToggle={handleDrawerToggle}
              navItems={navItems}
              mobileOpen={mobileOpen}
            />
          </nav>
          <Box component="main" width="100%">
            <Toolbar />
            <Suspense fallback={<LinearProgress sx={{ height: 5 }} />}>
              <Box>
                <IconButton
                  sx={{
                    position: "fixed",
                    right: 20,
                    bottom: 20,
                  }}
                  onClick={() => setDarkMode(!darkMode)}
                >
                  <DarkModeIcon />
                </IconButton>

                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about-me" element={<AboutMe />} />
                  <Route path="/skills" element={<Skills />} />
                </Routes>
              </Box>
            </Suspense>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
