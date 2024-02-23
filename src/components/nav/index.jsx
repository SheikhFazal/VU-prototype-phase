import {
  AppBar,
  Box,
  Button,
  Divider,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavBar(props) {
  const { handleDrawerToggle, navItems } = props;
  const theme = useTheme();
  console.log(theme);
  return (
    <AppBar component="nav" sx={{ px: 2, bgcolor: "transparent" }}>
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
          color={theme.palette.text.secondary}
          fontWeight={600}
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          PORTFOLIO
        </Typography>

        <Box gap={2} sx={{ display: { xs: "none", sm: "flex" } }}>
          {navItems.map((item) => (
            <Box key={item.id} className="nav-links-box">
              <Typography
                variant="body2"
                component={Link}
                to={item.links}
                sx={{ textDecoration: "none" }}
                color={theme.palette.text.secondary}
              >
                {item.title}
              </Typography>
              <Divider className="divider-for-nav-links" />
            </Box>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
