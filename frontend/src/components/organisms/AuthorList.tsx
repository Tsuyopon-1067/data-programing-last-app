import { Stack } from "@mui/material";
import { AuthorItem } from "../molecules/AuthorItem";
import { useDarkTheme } from "../templetes/DarkThemeProvider";
import styles from "./NewsList.module.css";

export const AuthorList = () => {
  const { borderColor } = useDarkTheme();
  return (
    <Stack
      direction={"column"}
      spacing={0}
      padding={"6px"}
      sx={{
        border: "solid 1px",
        borderRadius: "20px",
        borderColor: borderColor,
      }}
    >
      <div className={styles.topArea}>
        <span className={styles.topText}>作者のGitHub</span>
      </div>
      <AuthorItem
        name="Tsuyopon-1067"
        userId="Tsuyopon-1067"
        url="https://github.com/Tsuyopon-1067"
        img="https://avatars.githubusercontent.com/u/91947809?v=4"
      />
      <AuthorItem
        name="Shiba"
        userId="Shibatch28"
        url="https://github.com/Shibatch28"
        img="https://avatars.githubusercontent.com/u/119596854?v=4"
      />
      <a
        className={styles.a}
        href="https://github.com/Tsuyopon-1067/data-programing-last-app"
      >
        <div className={styles.bottomArea}>
          <span className={styles.bottomText}>リポジトリを表示</span>
        </div>
      </a>
    </Stack>
  );
};
