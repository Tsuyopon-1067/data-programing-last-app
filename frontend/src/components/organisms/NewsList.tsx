import { Stack } from "@mui/material";
import NewsItem from "../molecules/NewsItem";

export const NewsList = () => {
  return (
    <Stack
      direction={"column"}
      spacing={2}
      sx={{
        border: "solid #EFF3F4 1px",
        borderRadius: "16px",
      }}
    >
      <NewsItem title="HogeHoge" category="Fuga" url="hogehoge" comment={1000} />
      <NewsItem title="HogeHoge" category="Fuga" url="hogehoge" comment={1000} />
      <NewsItem title="HogeHoge" category="Fuga" url="hogehoge" comment={1000} />
    </Stack>
  );
}
