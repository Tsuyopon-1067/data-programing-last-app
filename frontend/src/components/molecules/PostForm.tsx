import styles from "./PostForm.module.css";

export function PostForm() {
  return (
    <div className={styles.main}>
      <div className={styles.userIcon} />
      <div className={styles.formContainer}>
        <textarea className={styles.textarea} placeholder="いまどうしてる？" />
      </div>
      <button className={styles.postButton}>ポストする</button>
    </div>
  );
}
