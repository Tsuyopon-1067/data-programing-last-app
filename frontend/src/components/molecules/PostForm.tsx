import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { userNameToColor } from "../../lib/userNameToColor";
import styles from "./PostForm.module.css";

type PostFormProps = {
  handleSend: (cointent: string)=>void;
  userName: string;
}
export const PostForm = ({userName, handleSend}: PostFormProps) => {
  const [content, setContent] = useState<string>("");
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
        />
      </div>
      <Button
        className={styles.postButton}
        disabled={content === ""}
        onClick={() => {
          handleSend(content);
          setContent("");
        }}
        sx={{
          gridRow: "3/4",
          gridColumn: "3/4",
          backgroundColor: "#1da1f2",
          ":hover": { background: "#1A8CD8" },
          color: "white",
          "&.Mui-disabled": {
            background: "#8ECDF8",
            color: "#ffffff"
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
}
