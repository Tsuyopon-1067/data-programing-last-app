import { TextField } from "@mui/material";
import { useState } from "react";
import styles from "./PostForm.module.css";

type PostFormProps = {
  handleSend: (name: string, cointent: string)=>void;
}
export const PostForm = ({handleSend}: PostFormProps) => {
  const [name, ] = useState<string>("名無し");
  const [content, setContent] = useState<string>("");
  return (
    <div className={styles.main}>
      <div className={styles.userIcon} />
      <div className={styles.formContainer}>
        <TextField
          id="outlined-multiline-flexible"
          label="いまどうしてる？"
          multiline
          variant="standard"
          maxRows={4}
          value={content}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setContent(event.target.value);
          }}
        />
      </div>
      <button
        className={styles.postButton}
        disabled={content === ""}
        onClick={() => {
          handleSend(name, content)
          setContent("");
        }}>
        ポストする
      </button>
    </div>
  );
}
