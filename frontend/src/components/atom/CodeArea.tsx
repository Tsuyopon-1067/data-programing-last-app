import { TextField } from "@mui/material";

interface CodeAreaProps {
  value: string;
  setValue: (value: string) => void;
}
export const CodeArea: React.FC<CodeAreaProps> = ({ value, setValue }) => {
  return (
    <TextField
      id="outlined-multiline-static"
      label="Pythonコードを貼り付け"
      multiline
      fullWidth
      defaultValue="Default Value"
      variant="standard"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      sx={{
        "label": {
          paddingLeft: "14px",
        },
        "div::before": {
          borderBottom: "none",
        }
      }}
    />
  );
}
