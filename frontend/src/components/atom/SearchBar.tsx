import { Search } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import { useDarkTheme } from "../templetes/DarkThemeProvider";

export const SearchBar = () => {
  const { isDarkMode } = useDarkTheme();
  const searchBackGroundColor = isDarkMode ? "#202327" : "#EFF3F4";
  const fontColor = isDarkMode ? "#8B8D90" : "#0F1419";
  const iconColor = isDarkMode ? "#71767B" : "#0F1419";
  const searchBarForcusColor = isDarkMode ? "#000000" : "#ffffff";
  const iconColorForcused = isDarkMode ? "#1B91E1" : "#1D9BF0";
  const [searchQuery, setSearchQuery] = useState("");
  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === "Enter") {
      window.location.href = `https://www.google.com/search?q=${searchQuery}`;
    }
  };
  return (
    <TextField
      id="input-with-icon-textfield"
      placeholder="Google検索"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
      }}
      InputLabelProps={{
        shrink: true,
      }}
      variant="outlined"
      sx={{
        borderStyle: "none",
        "& .MuiOutlinedInput-root": {
          borderRadius: "20px",
          height: "40px",
          transition: "border-color 0.3s",
          backgroundColor: searchBackGroundColor,
          borderColor: searchBackGroundColor,
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "initial",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#1ea1f1",
          },
          "&.Mui-focused": {
            backgroundColor: searchBarForcusColor,
            borderColor: "#1ea1f1",
            "& .MuiSvgIcon-root": {
              color: iconColorForcused,
            },
          },
          "& input": {
            color: fontColor,
          },
          "& div svg": {
            color: iconColor,
          },
        },
        "& .MuiInputLabel-root": {
          transition: "color 0.3s",
          top: "-6px",
          "&.Mui-focused": {
            color: fontColor,
          },
        },
      }}
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
};
