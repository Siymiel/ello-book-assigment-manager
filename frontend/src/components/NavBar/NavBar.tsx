import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { theme } from "../../theme";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "50px" }}>
      <AppBar position="static" sx={{ backgroundColor: "#335C6E" }}>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            aria-label="menu"
            sx={{ mr: 2, color: theme.palette.common.white }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ color: theme.palette.common.white }}>
            Ello Book Assignment Manager
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
