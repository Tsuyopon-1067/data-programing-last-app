import { useState } from "react";
import styles from "./WordCloudDisplay.module.css";
import { WordCloudPic } from "../atom/WordCloudPic";
import { CircularProgress } from "@mui/material";

export const WordCloudDisplay = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const WordCloudOrCircularProgress = () => {
    return (
      <div>
        <div style={{ display: isLoaded ? "block" : "none" }}>
          <WordCloudPic finishLoading={() => setIsLoaded(true)} />
        </div>
        <CircularProgress
          color="inherit"
          style={{ display: isLoaded ? "none" : "block" }}
        />
      </div>
    )

  }
  return (
    <div className={styles.main}>
      <div className={styles.description}>
        <h2>Word Cloud</h2>
        <p>全投稿からWord Cloudを生成します．</p>
        <p>表示まで5秒ほどかかる場合があります．</p>
      </div>
      <div className={styles.imgArea}>
        <WordCloudOrCircularProgress />
      </div>
    </div>
  );
}
