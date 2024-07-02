import { Home } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { NaviButton } from "../molecules/NaviButton";
import ArticleIcon from '@mui/icons-material/Article';

export const NaviMenu = () => {
  return (
    <Stack
      direction={"column"}
      spacing={2}
      height={"100vh"}
      alignItems="left"
      sx={{
        borderRight: "1px solid",
        borderColor: "#EFF3F4",
      }}
    >
      <NaviButton name="ホーム" url="/"><Home sx={{ fontSize: "28px" }} /></NaviButton>
      <NaviButton name="発表資料" url="/slide"><ArticleIcon sx={{ fontSize: "28px" }} /></NaviButton>
      <NaviButton name="アーキテクチャ" url="/architecture"><Home sx={{ fontSize: "28px" }} /></NaviButton>
      <NaviButton name="技術スタック" url="/techstack"><Home sx={{ fontSize: "28px" }} /></NaviButton>
      <NaviButton name="QRコード" url="/qr"><Home sx={{ fontSize: "28px" }} /></NaviButton>
    </Stack>
  );
}
