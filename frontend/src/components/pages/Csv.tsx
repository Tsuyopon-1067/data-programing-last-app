import { Button, Stack } from "@mui/material";
import React from "react";
import styles from "./Csv.module.css";

export const Csv = () => {
  return (
    <Stack spacing={2} padding={"10px"}>
      <h1>CSV出力</h1>
      <h2>ダウンロード</h2>
      <h3>形式</h3>
      <div className={styles.buttonGrid}>
        <CsvButtonElement type="時間順" />
        <CsvButtonElement type="五十音順" />
      </div>
    </Stack>
  );
};

const CsvButtonElement: React.FC<{ type: string }> = ({ type }) => {
  return (
    <Stack>
      <h3>{type}</h3>
      <Button variant="contained" className={styles.button}>
        ダウンロード
      </Button>
    </Stack>
  );
};
