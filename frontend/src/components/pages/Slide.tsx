import { useState } from "react";
import styles from "./Slide.module.css";
import { Pager } from "../molecules/Pager";

export const Slide = () => {
  const [page, setPage] = useState(1);
  const max = 8;
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
    "/slide/slide01.png",
    "/slide/slide02.png",
    "/slide/slide03.png",
    "/slide/slide04.png",
    "/slide/slide05.png",
    "/slide/slide06.png",
    "/slide/slide07.png",
    "/slide/slide08.png",
  ]
  return <img width={"100%"} height={"100%"} src={srcList[page - 1]} alt="" />;
};

