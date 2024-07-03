import { Home } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { NaviButton } from "../molecules/NaviButton";
import ArticleIcon from "@mui/icons-material/Article";
import { ResponsiveContext } from "../../App";
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
