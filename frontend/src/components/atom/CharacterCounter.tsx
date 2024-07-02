import { CircularProgress } from "@mui/material";

export const CharacterCounter: React.FC<{ value: number }> = ({ value }) => {
  const circleValue = (value / 140) * 100;
  return (
    <div>
      <CircularProgress
        variant="determinate"
        size={"100%"}
        value={circleValue}
      />
    </div>
  );
};
