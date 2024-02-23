import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Home from "./components/home";
import AboutMe from "./components/about-me";
import Skills from "./components/skills";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import "./app.css";

function App(props) {
  // const darkTheme = createTheme({
  //   palette: {
  //     mode: "dark",
  //     primary: {
  //       main: "#1976d2",
  //     },
  const [darkMode, setDarkMode] = useState(false);
  //   },
  // });
  // const theme = useTheme();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerWidth = 240;

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  const navItems = [
    { id: 1, title: "Home", links: "/" },
    { id: 2, title: "About Me", links: "about-me" },
  ];
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          // <ListItem key={item.id} disablePadding>
          //   <ListItemButton sx={{ textAlign: "center" }}>
          //     <ListItemText primary={item.title} />
          //   </ListItemButton>
          // </ListItem>
          <ListItem key={item.id} disablePadding>
            <Button
              component={Link}
              to={item.links}
              sx={{ textAlign: "center", width: "100%" }}
            >
              <ListItemText primary={item.title} />
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const theme = darkMode ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar component="nav" color="primary">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                Sheikh Fazal
              </Typography>

              <Box gap={2} sx={{ display: { xs: "none", sm: "flex" } }}>
                <Button>Click</Button>
                {navItems.map((item) => (
                  <Box key={item.id} className="nav-links-box">
                    <Button
                      variant="text"
                      sx={{ color: theme.palette.grey[100] }}
                      component={Link}
                      to={item.links}
                    >
                      {item.title}
                    </Button>
                    <Divider className="divider-for-nav-links" />
                  </Box>
                ))}
              </Box>
            </Toolbar>
          </AppBar>
          <nav>
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          </nav>
          <Box component="main" p={2}>
            <Toolbar />
            <Button onClick={toggleTheme}>Click me</Button>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-me" element={<AboutMe />} />
              <Route path="/skills" element={<Skills />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
