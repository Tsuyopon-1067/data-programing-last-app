import { LinkList } from "../organisms/LinkList";
import { TimeLine } from "../organisms/TimeLine";
import styles from "./TimelineLinkList.module.css";

export const TimeLineLinkList = () => {
  return (
    <div className={styles.main}>
      <div className={styles.timeline}>
        <TimeLine />
      </div>
      <div className={styles.linklist}>
        <LinkList />
      </div>
    </div>
  );
};
