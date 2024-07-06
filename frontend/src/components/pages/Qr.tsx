import styles from "./Qr.module.css";

export const Qr = () => {
  return (
    <div>
      <h1>QRコード</h1>
      <img className={styles.img} src="/QR_301230.webp" alt="QRコード" />
    </div>
  );
};
