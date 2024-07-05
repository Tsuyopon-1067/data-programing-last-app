import { TextField } from "@mui/material";

interface CodeAreaProps {
  value: string;
  setValue: (value: string) => void;
  handleSubmit: () => Promise<void>
}

export const CodeArea: React.FC<CodeAreaProps> = ({ value, setValue, handleSubmit }) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
      event.preventDefault();
      handleSubmit();
    }
  };
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
      onKeyDown={handleKeyDown}
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
