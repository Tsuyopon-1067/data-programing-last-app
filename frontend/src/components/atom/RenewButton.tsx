import { Autorenew } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export const RenewButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <IconButton onClick={() => onClick()}>
      <Autorenew />
    </IconButton>
  );
};
