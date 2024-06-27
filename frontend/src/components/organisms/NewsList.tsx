import { Stack } from "@mui/material";
<<<<<<< Updated upstream
import { useEffect, useState } from "react";
import { News } from "../../types/news";
import NewsItem from "../molecules/NewsItem";
import styles from "./NewsList.module.css";

export const NewsList = () => {
  //const[newsList, setNewsList] = useState<News[]>([]);
  const[newsList, setNewsList] = useState<News[]>(
    JSON.parse(`[{"title":"28日は大雨 九州は線状降水帯恐れ","category":"国内","url":"https://news.yahoo.co.jp/pickup/6505754","comments":73},{"title":"中国 歴代国防相2人の党籍を剥奪","category":"国際","url":"https://news.yahoo.co.jp/pickup/6505780","comments":390},{"title":"37年半ぶりの円安水準 高まる緊張","category":"経済","url":"https://news.yahoo.co.jp/pickup/6505771","comments":1692},{"title":"SnowManラウール 仏でモデル所属","category":"エンタメ","url":"https://news.yahoo.co.jp/pickup/6505790","comments":271}]`)
  );
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
      <div className={styles.topArea}>
        <span className={styles.topText}>いまどうなってる？</span>
      </div>
      <NewsItems />
      <a className={styles.a} href="https://news.yahoo.co.jp/">
      <div className={styles.bottomArea}>
        <span className={styles.bottomText}>Yahooニュースより</span>
      </div>
      </a>
=======

export const NewsList = () => {
  return (
    <Stack direction={"column"} spacing={2}>
      hogehoge
      hogehoge
      hogehoge
>>>>>>> Stashed changes
    </Stack>
  );
}
