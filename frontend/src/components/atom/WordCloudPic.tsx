import React from 'react';

export const WordCloudPic: React.FC<{ finishLoading: () => void }> = ({ finishLoading }) => {
  return (
    <img
      src="./fetch/wordcloud"
      alt="word cloud image"
      onLoad={() => finishLoading()}
    />
  );
};
