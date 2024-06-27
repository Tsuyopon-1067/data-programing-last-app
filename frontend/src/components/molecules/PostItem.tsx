import { userNameToColor } from "../../lib/userNameToColor";
import { PostItemType } from "../../types/postItemType";
import styles from "./PostItem.module.css";

export const PostItem = ({name, content, date}: PostItemType) => {
  return (
    <div className={styles.main}>
      <div
        className={styles.userIcon}
        style={{ backgroundColor: userNameToColor(name) }}
      />
      <div className={styles.userNameArea}>
        <span>{name}</span>
        <span>{date}</span>
      </div>
      <div className={styles.contentArea}>
        <span>{content}</span>
      </div>
    </div>
  );
}
