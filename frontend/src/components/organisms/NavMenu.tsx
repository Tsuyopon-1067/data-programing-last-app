import { Home } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { NaviButton } from "../molecules/NaviButton";

export const NaviMenu = () => {
  return (
    <Stack
      direction={"column"}
      spacing={2}
      marginRight={3}
      height={"100vh"}
      sx={{
        borderRight: "1px solid",
        borderColor: "#EFF3F4",
      }}
    >
      <NaviButton name="ホーム"><Home sx={{fontSize: "28px"}} /></NaviButton>
      <NaviButton name="ホーム"><Home sx={{fontSize: "28px"}} /></NaviButton>
      <NaviButton name="ホーム"><Home sx={{fontSize: "28px"}} /></NaviButton>
      <NaviButton name="ホーム"><Home sx={{fontSize: "28px"}} /></NaviButton>
      <NaviButton name="ホーム"><Home sx={{fontSize: "28px"}} /></NaviButton>
    </Stack>
  );
}
