import styles from "./Architecture.module.css";
export const Architecture = () => {
  return (
    <div>
      <h1>アーキテクチャ</h1>
      <div>
        <img
          className={styles.img}
          src="/architecture.png"
          alt="architecture"
        />
      </div>
    </div>
  );
};
