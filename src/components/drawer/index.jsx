import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function CustomDrawer(props) {
    
  const { handleDrawerToggle, navItems, mobileOpen, window } = props;
  const drawerWidth = 240;
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
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
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
        <Typography variant="h6" sx={{ my: 2 }}>
          Sheikh Fazal Portfolio
        </Typography>
        <Divider />
        <List>
          {navItems.map((item) => (
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
    </Drawer>
  );
}
