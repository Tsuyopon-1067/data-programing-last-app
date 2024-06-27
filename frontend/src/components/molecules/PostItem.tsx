import { PostItemType } from "../../types/postItemType";
import styles from "./PostItem.module.css";

export const PostItem = ({ username, message, timestamp }: PostItemType) => {
  return (
    <div className={styles.main}>
      <div className={styles.userIcon} />
      <div className={styles.userNameArea}>
        <span>{username}</span>
        <span>{timestamp}</span>
      </div>
      <div className={styles.messageArea}>
        <span>{message}</span>
      </div>
    </div>
  );
}
