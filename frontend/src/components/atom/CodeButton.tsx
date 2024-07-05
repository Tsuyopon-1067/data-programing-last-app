import { Box, CircularProgress, IconButton } from "@mui/material"
import { CodeRunStatus } from "../../types/codeRunStatus"
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import CheckIcon from '@mui/icons-material/Check';
import { Error, HourglassEmpty } from "@mui/icons-material";

export const CodeButton: React.FC<{ status: CodeRunStatus, handleSubmit: () => Promise<void> }> = ({ status, handleSubmit }) => {

  const Icon = (() => {
    switch (status) {
      case "idle":
        return <PlayCircleIcon />;
      case "running":
        return <HourglassEmpty />;
      case "error":
        return <Error color="error" />;
      case "success":
        return <CheckIcon color="success" />;
    }
  })();
  return (
    <Box margin={"6px"}>
      <IconButton onClick={handleSubmit}>
        {Icon}
      </IconButton>
      {status === "running" && (
        <CircularProgress
          size={40}
          sx={{
            position: 'relative',
            top: -40,
            left: 0,
            zIndex: 1,
          }}
        />
      )}
    </Box>
  )
}
