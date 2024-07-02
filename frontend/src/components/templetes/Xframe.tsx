import { Outlet } from "react-router-dom";
import { NaviMenu } from "../organisms/NavMenu";
import styles from "./Xframe.module.css";

export const Xframe = () => {
  return (
    <div className={styles.main}>
      <div className={styles.nav}>
        <NaviMenu />
      </div>
      <div className={styles.contentArea}>
        <Outlet />
      </div>
    </div>
  );
};
