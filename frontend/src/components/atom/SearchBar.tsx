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
        borderStyle: 'none',
        '& .MuiOutlinedInput-root': {
          borderRadius: '20px',
          height: '40px',
          transition: 'border-color 0.3s',
          backgroundColor: '#eff3f4',
          borderColor: '#eff3f4',
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'initial',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#1ea1f1',
          },
          '&.Mui-focused': {
            backgroundColor: '#ffffff',
            borderColor: '#1ea1f1',
            '& .MuiSvgIcon-root': {
              color: '#1ea1f1',
            },
          },
        },
        '& .MuiInputLabel-root': {
          transition: 'color 0.3s',
          top: '-6px',
          '&.Mui-focused': {
            color: '#1ea1f1',
          },
        },
      }}
    />
  );
}
