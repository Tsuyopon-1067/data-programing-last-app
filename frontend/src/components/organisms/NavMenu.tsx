import { Home } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { NaviButton } from "../molecules/NaviButton";
import ArticleIcon from '@mui/icons-material/Article';

export const NaviMenu = () => {
  return (
    <Stack
      direction={"column"}
      spacing={2}
      marginRight={3}
      height={"100vh"}
      alignItems="left"
      sx={{
        borderRight: "1px solid",
        borderColor: "#EFF3F4",
      }}
    >
      <NaviButton name="ホーム"><Home sx={{ fontSize: "28px" }} /></NaviButton>
      <NaviButton name="発表資料"><ArticleIcon sx={{ fontSize: "28px" }} /></NaviButton>
      <NaviButton name="ホーム"><Home sx={{ fontSize: "28px" }} /></NaviButton>
      <NaviButton name="ホーム"><Home sx={{ fontSize: "28px" }} /></NaviButton>
      <NaviButton name="ホーム"><Home sx={{ fontSize: "28px" }} /></NaviButton>
    </Stack>
  );
}
