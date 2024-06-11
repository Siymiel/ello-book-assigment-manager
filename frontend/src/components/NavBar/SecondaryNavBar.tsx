import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import FilterListIcon from "@mui/icons-material/FilterList";
import { theme } from "../../theme";
import { SecondaryNavBarProps } from "./types";

const SecondaryNavBar: React.FC<SecondaryNavBarProps> = ({ count }) => {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "10px", marginTop: "10px" }}>
      <AppBar position="static" sx={{ backgroundColor: "#335C6E" }}>
        <Toolbar
          variant="dense"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <IconButton
              edge="start"
              aria-label="menu"
              sx={{ mr: 1, color: theme.palette.common.white }}
            >
              <CollectionsBookmarkIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ color: theme.palette.common.white }}
            >
              Reading List({count})
            </Typography>
          </Box>

          <IconButton
            edge="start"
            aria-label="menu"
            sx={{
              color: theme.palette.common.white,
            }}
          >
            <FilterListIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default SecondaryNavBar;
