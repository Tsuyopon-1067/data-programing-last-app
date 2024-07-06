import { Button, Stack } from "@mui/material";
import React from "react";
import styles from "./Csv.module.css";

import { saveAs } from "file-saver";

export const Csv = () => {
  return (
    <Stack spacing={2} padding={"10px"}>
      <h1>CSV出力</h1>
      <h2>ダウンロード</h2>
      <h3>形式</h3>
      <div className={styles.buttonGrid}>
        <CsvButtonElement type="時間順" url="/csv/date" baseFileName="date" />
        <CsvButtonElement
          type="投稿者順"
          url="/csv/username"
          baseFileName="username"
        />
      </div>
    </Stack>
  );
};

const CsvButtonElement: React.FC<{
  type: string;
  url: string;
  baseFileName: string;
}> = ({ type, url, baseFileName }) => {
  return (
    <Stack>
      <h3>{type}</h3>
      <DownloadButton url={url} baseFileName={baseFileName} />
    </Stack>
  );
};

const DownloadButton: React.FC<{ url: string; baseFileName: string }> = ({
  url,
  baseFileName,
}) => {
  const handleClick = () => {
    const now = new Date();
    const formattedDate = now.toISOString().slice(0, -5);
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => saveAs(blob, `${baseFileName}-${formattedDate}.csv`));
  };

  return (
    <Button variant="contained" className={styles.button} onClick={handleClick}>
      ダウンロード
    </Button>
  );
};
