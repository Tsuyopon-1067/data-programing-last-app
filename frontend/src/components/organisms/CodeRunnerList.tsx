import { IconButton, Stack } from "@mui/material";
import { CodeItem } from "../molecules/CodeItem";
import { useState } from "react";
import { Add } from "@mui/icons-material";
import styles from "./CodeRunnerList.module.css";

export const CodeRunnerList = () => {
  const [list, setList] = useState([<CodeItem />]);
  const handleClick = () => {
    setList([...list, <CodeItem />]);
  }
  return (
    <Stack>
      {list.map((item) => item)}
      <div className={styles.add}>
        <IconButton onClick={handleClick}>
          <Add />
        </IconButton>
      </div>
    </Stack>
  );
}
