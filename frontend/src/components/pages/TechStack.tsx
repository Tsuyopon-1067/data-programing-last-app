import { Divider } from "@mui/material";
import styles from "./TechStack.module.css";

export const TechStack = () => {
  return (
    <div className={styles.main}>
      <h1>技術スタック</h1>
      <h2>フロントエンド</h2>
      <h3>プログラミング言語</h3>
      <div className={styles.stack}>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
        </ul>
      </div>
      <h3>ライブラリ</h3>
      <div className={styles.stack}>
        <ul>
          <li>React</li>
          <li>Material-UI</li>
        </ul>
      </div>
      <Divider />
      <h2>バックエンド</h2>
      <h3>プログラミング言語</h3>
      <div className={styles.stack}>
        <ul>
          <li>Go</li>
          <li>Python</li>
        </ul>
      </div>
      <h3>ライブラリ</h3>
      <div className={styles.stack}>
        <h4>Go</h4>
        <ul>
          <li>echo</li>
        </ul>
        <h4>Python</h4>
        <ul>
          <li>Flask</li>
        </ul>
      </div>
      <Divider />
      <h2>開発環境</h2>
      <div className={styles.stack}>
        <ul>
          <li>Docker</li>
          <li>vite</li>
        </ul>
      </div>
    </div>
  );
};
