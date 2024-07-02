import styles from "./Pager.module.css";

import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { CircleButton } from "../atom/CircleButton";

export const Pager: React.FC<{
  max: number;
  page: number;
  setPage: (page: number) => void;
}> = ({ max, page, setPage }) => {
  const setPageWrapepr = (page: number) => {
    if (1 <= page && page <= max) {
      setPage(page);
    }
  };

  const NumButtons = () => {
    const buttons = [];
    for (let i = 1; i <= max; i++) {
      buttons.push(
        <CircleButton
          disabled={i === page}
          key={i}
          onClick={() => setPageWrapepr(i)}
        >
          <span>{i}</span>
        </CircleButton>
      );
    }
    return <>{buttons.map((button) => button)}</>;
  };

  return (
    <div className={styles.main}>
      <CircleButton
        disabled={page === 1}
        onClick={() => setPageWrapepr(page - 1)}
      >
        <ArrowBack sx={{ fontSize: "12px" }} />
      </CircleButton>
      <NumButtons />
      <CircleButton
        disabled={page === max}
        onClick={() => setPageWrapepr(page + 1)}
      >
        <ArrowForward sx={{ fontSize: "12px" }} />
      </CircleButton>
    </div >
  );
};

