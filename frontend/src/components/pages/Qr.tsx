import styles from "./Qr.module.css";

export const Qr = () => {
  return (
    <div>
      <h1>QRコード</h1>
      <p>仮です．後でこの行は消して画像を差し替えます．</p>
      <img
        className={styles.img}
        src="https://live.staticflickr.com/65535/53699042687_e7f3947b53_5k.jpg"
      />
    </div>
  );
};
