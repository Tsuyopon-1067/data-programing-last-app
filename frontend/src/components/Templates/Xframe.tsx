<<<<<<< Updated upstream
import { LinkList } from "../organisms/LinkList";
import { NaviMenu } from "../organisms/NavMenu";
=======
import { NaviMenue } from "../organisms/NavMenue";
import { NewsList } from "../organisms/NewsList";
>>>>>>> Stashed changes
import { TimeLine } from "../organisms/TimeLine";
import styles from "./Xframe.module.css";

export const Xframe = () => {
  return (
    <div className={styles.main}>
      <div className={styles.nav}>
<<<<<<< Updated upstream
        <NaviMenu />
=======
        <NaviMenue />
>>>>>>> Stashed changes
      </div>
      <div className={styles.timeline}>
        <TimeLine />
      </div>
<<<<<<< Updated upstream
      <div className={styles.links}>
        <LinkList />
=======
      <div className={styles.others}>
        <NewsList />
>>>>>>> Stashed changes
      </div>
    </div>
  );
}