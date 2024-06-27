import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { News } from "../../types/news";
import NewsItem from "../molecules/NewsItem";

export const NewsList = () => {
  const[newsList, setNewsList] = useState<News[]>([]);
  useEffect(() => {
    fetch('http://localhost:8080/fetch/news')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setNewsList(data);
      });
  }, []);

  const NewsItems = () => {
    return newsList.map((news, index) => {
      return (
        <NewsItem
          key={index}
          title={news.title}
          category={news.category}
          url={news.url}
          comment={news.comments}
        />
      );
    });
  }

  return (
    <Stack
      direction={"column"}
      spacing={2}
      sx={{
        border: "solid #EFF3F4 1px",
        borderRadius: "16px",
      }}
    >
      <NewsItems />
    </Stack>
  );
}
