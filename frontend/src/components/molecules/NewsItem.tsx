import { useDarkTheme } from "../templetes/DarkThemeProvider";
import styles from "./NewsItem.module.css";

export const NewsItem: React.FC<{
  title: string;
  url: string;
  category: string;
  comment: number;
}> = ({ title, url, category, comment }) => {
  const { fontColor, isDarkMode } = useDarkTheme();
  const subFontColor = isDarkMode ? "#71767B" : "#536471";
  return (
    <a className={styles.a} href={url}>
      <div className={styles.main}>
        <p className={styles.category} style={{ color: subFontColor }}>
          {category}
        </p>
        <h2 className={styles.title} style={{ color: fontColor }}>
          {title}
        </h2>
        <p className={styles.comment} style={{ color: subFontColor }}>
          {comment} comments
        </p>
      </div>
    </a>
  );
};

export default NewsItem;
