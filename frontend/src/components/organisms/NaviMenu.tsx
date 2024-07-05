import { Home } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { NaviButton } from "../molecules/NaviButton";
import ArticleIcon from "@mui/icons-material/Article";
import CloudIcon from '@mui/icons-material/Cloud';
import { ResponsiveContext } from "../../App";
import CodeIcon from '@mui/icons-material/Code';
import { useContext } from "react";

export const NaviMenu = () => {
  const responsive = useContext(ResponsiveContext);
  let paddingRight = "0";
  if (responsive?.value === "tablet" || responsive?.value === "mobile") {
    paddingRight = "10px";
  }
  return (
    <Stack
      direction={"column"}
      spacing={2}
      height={"100vh"}
      width={"100%"}
      padding={"10px"}
      paddingRight={paddingRight}
      alignItems="left"
      sx={{
        borderRight: "1px solid",
        borderColor: "#EFF3F4",
      }}
    >
      <NaviButton name="ホーム" url="/">
        <Home sx={{ fontSize: "28px" }} />
      </NaviButton>
      <NaviButton name="Word Cloud" url="/wordcloud">
        <CloudIcon sx={{ fontSize: "28px" }} />
      </NaviButton>
      <NaviButton name="Python" url="/coderunner">
        <CodeIcon sx={{ fontSize: "28px" }} />
      </NaviButton>
      <NaviButton name="発表資料" url="/slide">
        <ArticleIcon sx={{ fontSize: "28px" }} />
      </NaviButton>
      <NaviButton name="アーキテクチャ" url="/architecture">
        <Home sx={{ fontSize: "28px" }} />
      </NaviButton>
      <NaviButton name="技術スタック" url="/techstack">
        <Home sx={{ fontSize: "28px" }} />
      </NaviButton>
      <NaviButton name="QRコード" url="/qr">
        <Home sx={{ fontSize: "28px" }} />
      </NaviButton>
    </Stack>
  );
};
