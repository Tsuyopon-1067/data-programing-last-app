import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { News } from "../../types/news";
import NewsItem from "../molecules/NewsItem";
import styles from "./NewsList.module.css";

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
      spacing={0}
      padding={"6px"}
      sx={{
        border: "solid #EFF3F4 1px",
        borderRadius: "20px",
      }}
    >
      <NewsItems />
      <a className={styles.a} href="https://news.yahoo.co.jp/">
      <div className={styles.bottomArea}>
        <span className={styles.bottomText}>Yahooニュースより</span>
      </div>
      </a>
    </Stack>
  );
}
