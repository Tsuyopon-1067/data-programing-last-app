import { NaviMenu } from "../organisms/NavMenu";
import { NewsList } from "../organisms/NewsList";
import { TimeLine } from "../organisms/TimeLine";
import styles from "./Xframe.module.css";

export const Xframe = () => {
  return (
    <div className={styles.main}>
      <div className={styles.nav}>
        <NaviMenu />
      </div>
      <div className={styles.timeline}>
        <TimeLine />
      </div>
      <div className={styles.others}>
        <NewsList />
      </div>
    </div>
  );
}