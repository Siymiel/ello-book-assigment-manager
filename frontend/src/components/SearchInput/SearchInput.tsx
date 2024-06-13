import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import React from "react";
import { SearchInputProps } from "./types";
import { theme } from "../../theme";

const SearchInput: React.FC<SearchInputProps> = ({
  inputValue,
  handleInputChange,
  handleClearInput,
}) => {
  return (
    <TextField
      label="Search Books"
      variant="outlined"
      fullWidth
      value={inputValue}
      autoComplete="off"
      onChange={handleInputChange}
      style={{
        marginBottom: "5px",
        backgroundColor: theme.palette.common.white,
        borderRadius: "5px",
      }}
      placeholder="Enter book title..."
      InputLabelProps={{
        sx: {
          fontWeight: "bold",
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: inputValue && (
          <InputAdornment position="end">
            <IconButton onClick={handleClearInput}>
              <ClearIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchInput;
