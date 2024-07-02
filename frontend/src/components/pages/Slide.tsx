import { useState } from "react";
import styles from "./Slide.module.css";
import { Pager } from "../molecules/Pager";

export const Slide = () => {
  const [page, setPage] = useState(1);
  const max = 4;
  return (
    <div className={styles.main}>
      <div className={styles.slideArea}>
        <SlideImages page={page} />
      </div>
      <div className={styles.buttonArea}>
        <div>
          <Pager page={page} max={max} setPage={setPage} />
        </div>
      </div>
    </div>
  );
};

const SlideImages: React.FC<{ page: number }> = ({ page }) => {
  const srcList = [
    "/slide/slidetest.001.png",
    "/slide/slidetest.002.png",
    "/slide/slidetest.003.png",
    "/slide/slidetest.004.png",
  ]
  return <img width={"100%"} height={"100%"} src={srcList[page - 1]} alt="" />;
};

