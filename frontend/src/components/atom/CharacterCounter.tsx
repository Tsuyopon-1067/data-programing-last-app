import { Box, CircularProgress, Typography } from "@mui/material";

export const CharacterCounter: React.FC<{ value: number }> = ({ value }) => {
  let circleValue = (value / 140) * 100;
  let color: "primary" | "warning" | "error" = "primary";
  let labelValue = "";
  if (value > 130) {
    labelValue = (140 - value).toString();
  }

  if (140 < value) {
    color = "error";
    circleValue = 100;
  } else if (130 < value) {
    color = "warning";
  }
  return (
    <div>
      <CircularProgress
        variant="determinate"
        size={"100%"}
        value={circleValue}
        color={color}
      />
      <Box
        sx={{
          top: -25,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'relative',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{labelValue}</Typography>
      </Box>
    </div>
  );
};
