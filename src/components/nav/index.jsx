import {
  AppBar,
  Box,
  Button,
  Divider,
  Grid,
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
    <AppBar component="nav" sx={{ px: 2 }}>
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
        <Grid container>
          <Grid item sm={3}>
            <Typography
              align="center"
              variant="h6"
              color={theme.palette.text.secondary}
              fontWeight={600}
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              PORTFOLIO
            </Typography>
          </Grid>

          <Grid
            container
            item
            md={5}
            justifyContent='center'

            alignItems='center'
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
            {navItems.map((item) => (
              <Box key={item.id} mx={3} className="nav-links-box">
                <Typography
                  variant="body1"
                  fontWeight={600}
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
          </Grid>
          <Grid
            item
            sm={3}
            display={{ xs: "none", sm: "flex" }}
            border="1px solid black"
          >
            
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
