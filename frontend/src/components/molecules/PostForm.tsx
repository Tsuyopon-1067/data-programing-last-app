import { TextField } from "@mui/material";
import styles from "./PostForm.module.css";

export const PostForm = () => {
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
        />
      </div>
      <button className={styles.postButton}>ポストする</button>
    </div>
  );
}
