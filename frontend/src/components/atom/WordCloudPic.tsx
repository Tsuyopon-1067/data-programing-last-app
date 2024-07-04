import React from 'react';
import styles from './WordCloudPic.module.css';

export const WordCloudPic: React.FC<{ finishLoading: () => void }> = ({ finishLoading }) => {
  return (
    <img className={styles.img}
      src="./fetch/wordcloud"
      alt="word cloud image"
      onLoad={() => finishLoading()}
    />
  );
};
