import { Button, TextField } from "@mui/material";
import { KeyboardEvent, useState } from "react";
import { userNameToColor } from "../../lib/userNameToColor";
import { useDarkTheme } from "../templetes/DarkThemeProvider";
import styles from "./PostForm.module.css";
import React from "react";

type PostFormProps = {
  handleSend: (cointent: string) => void;
  userName: string;
};

export const PostForm = ({ userName, handleSend }: PostFormProps) => {
  const [content, setContent] = useState<string>("");
  const { isDarkMode } = useDarkTheme();
  const sendPost = (content: string) => {
    if (content === "") {
      return;
    }
    handleSend(content);
    setContent("");
  };
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>): void => {
    // ctr + Enter or command + Enter
    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
      event.preventDefault();
      sendPost(content);
    }
  };

  return (
    <div className={styles.main}>
      <div
        className={styles.userIcon}
        style={{ backgroundColor: userNameToColor(userName) }}
      />
      <div className={styles.userNameArea}>
        <span>{userName}</span>
      </div>
      <div className={styles.formContainer}>
        <TextField
          id="outlined-multiline-flexible"
          label="いまどうしてる？"
          multiline
          variant="standard"
          fullWidth
          maxRows={4}
          value={content}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setContent(event.target.value);
          }}
          onKeyDown={handleKeyDown}
          sx={{
            label: { color: isDarkMode ? "#71767B" : "#536471" },
            div: {
              textarea: { color: isDarkMode ? "#E7E9EA" : "#0F1419" },
            },
          }}
        />
      </div>
      <Button
        className={styles.postButton}
        disabled={content === ""}
        onClick={() => {
          sendPost(content);
        }}
        sx={{
          gridRow: "3/4",
          gridColumn: "3/4",
          backgroundColor: "#1da1f2",
          ":hover": { background: "#1A8CD8" },
          color: "white",
          "&.Mui-disabled": {
            background: "#8ECDF8",
            color: "#ffffff",
          },
          padding: "5px 12px",
          border: "none",
          borderRadius: "20px",
          fontSize: "14px",
          fontWeight: "bold",
        }}
      >
        ポストする
      </Button>
    </div>
  );
};
