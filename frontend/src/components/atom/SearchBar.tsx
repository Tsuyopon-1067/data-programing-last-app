import { Search } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";

export const SearchBar = () => {
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
        '& .MuiOutlinedInput-root': {
          borderRadius: '20px',
          height: '40px',
        },
      }}
    />
  );
}
