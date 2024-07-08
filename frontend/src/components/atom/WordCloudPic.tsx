import React from "react";
import styles from "./WordCloudPic.module.css";

export const WordCloudPic: React.FC<{
  finishLoading: () => void;
  hash: string;
}> = ({ finishLoading, hash }) => {
  return (
    <img
      className={styles.img}
      src={`./fetch/wordcloud?${hash}`}
      alt="word cloud image"
      onLoad={() => finishLoading()}
    />
  );
};
