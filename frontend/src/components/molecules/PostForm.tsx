import { Button, TextField } from "@mui/material";
import { useState } from "react";
import styles from "./PostForm.module.css";

type PostFormProps = {
  handleSend: (name: string, cointent: string) => void;
}
export const PostForm = ({ handleSend }: PostFormProps) => {
  const [name,] = useState<string>("名無し");
  const [message, setMessage] = useState<string>("");
  return (
    <div className={styles.main}>
      <div className={styles.userIcon} />
      <div className={styles.formContainer}>
        <TextField
          id="outlined-multiline-flexible"
          label="いまどうしてる？"
          multiline
          variant="standard"
          fullWidth
          maxRows={4}
          value={message}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setMessage(event.target.value);
          }}
        />
      </div>
      <Button
        className={styles.postButton}
        disabled={message === ""}
        onClick={() => {
          handleSend(name, message);
          setMessage("");
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
