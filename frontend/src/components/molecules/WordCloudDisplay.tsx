import { useState } from "react";
import styles from "./WordCloudDisplay.module.css";
import { WordCloudPic } from "../atom/WordCloudPic";
import { CircularProgress } from "@mui/material";
import { RenewButton } from "../atom/RenewButton";

export const WordCloudDisplay = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const generateRandomString = () => Math.random.toString();
  const [hash, setHash] = useState(generateRandomString()); // imgタグのsrcに対するクエリパラメータ
  const WordCloudOrCircularProgress = () => {
    return (
      <div>
        <div style={{ display: isLoaded ? "block" : "none" }}>
          <WordCloudPic finishLoading={() => setIsLoaded(true)} hash={hash} />
        </div>
        <CircularProgress
          color="inherit"
          style={{ display: isLoaded ? "none" : "block" }}
        />
      </div>
    );
  };
  return (
    <div className={styles.main}>
      <div className={styles.description}>
        <h2>
          Word Cloud{" "}
          <RenewButton
            onClick={() => {
              setHash(generateRandomString());
              setIsLoaded(false);
            }}
          />
        </h2>
        <p>全投稿からWord Cloudを生成します．</p>
        <p>表示まで5秒ほどかかる場合があります．</p>
      </div>
      <div className={styles.imgArea}>
        <WordCloudOrCircularProgress />
      </div>
    </div>
  );
};
