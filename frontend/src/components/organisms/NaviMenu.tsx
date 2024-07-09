import {
  Architecture,
  FormatListBulleted,
  Home,
  QrCode2,
  TableRows,
} from "@mui/icons-material";
import ArticleIcon from "@mui/icons-material/Article";
import CloudIcon from "@mui/icons-material/Cloud";
import CodeIcon from "@mui/icons-material/Code";
import { Stack } from "@mui/material";
import { useContext } from "react";
import { ResponsiveContext } from "../../App";
import { LogoButton } from "../molecules/LogoButton";
import { NaviButton } from "../molecules/NaviButton";
import { useDarkTheme } from "../templetes/DarkThemeProvider";

export const NaviMenu = () => {
  const responsive = useContext(ResponsiveContext);
  const { borderColor } = useDarkTheme();
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
        borderColor: borderColor,
      }}
    >
      <LogoButton />
      <NaviButton name="ホーム" url="/">
        <Home sx={{ fontSize: "28px" }} />
      </NaviButton>
      <NaviButton name="Word Cloud" url="/wordcloud">
        <CloudIcon sx={{ fontSize: "28px" }} />
      </NaviButton>
      <NaviButton name="Python" url="/coderunner">
        <CodeIcon sx={{ fontSize: "28px" }} />
      </NaviButton>
      <NaviButton name="CSV出力" url="/csv">
        <FormatListBulleted sx={{ fontSize: "28px" }} />
      </NaviButton>
      <NaviButton name="発表資料" url="/slide">
        <ArticleIcon sx={{ fontSize: "28px" }} />
      </NaviButton>
      <NaviButton name="アーキテクチャ" url="/architecture">
        <Architecture sx={{ fontSize: "28px" }} />
      </NaviButton>
      <NaviButton name="技術スタック" url="/techstack">
        <TableRows sx={{ fontSize: "28px" }} />
      </NaviButton>
      <NaviButton name="QRコード" url="/qr">
        <QrCode2 sx={{ fontSize: "28px" }} />
      </NaviButton>
    </Stack>
  );
};
