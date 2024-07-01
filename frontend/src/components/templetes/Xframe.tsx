import { NaviMenu } from "../organisms/NavMenu";
import { TimeLineLinkList } from "../pages/TimelineLinkList";
import styles from "./Xframe.module.css";

export const Xframe = () => {
  return (
    <div className={styles.main}>
      <div className={styles.nav}>
        <NaviMenu />
      </div>
      <div className={styles.contentArea}>
        <TimeLineLinkList />
      </div>
    </div>
  );
};
