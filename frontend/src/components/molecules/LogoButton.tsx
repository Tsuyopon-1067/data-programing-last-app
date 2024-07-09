import { IconButton } from "@mui/material";
import { useContext } from "react";
import { ResponsiveContext } from "../../App";
import styles from "./LogoButton.module.css";

export const LogoButton = () => {
  const responsive = useContext(ResponsiveContext);
  if (responsive?.value === "pc") {
    return (
      <div>
        <div className={styles.buttonGrid}>
          <div className={styles.iconArea}>
            <div className={styles.iconMiddle}>
              <LogoButtonCompoennt />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div style={{ marginLeft: "-8px" }}>
      <LogoButtonCompoennt />
    </div>
  );
};

const LogoButtonCompoennt = () => {
  return (
    <IconButton>
      <img src="/logo.png" width="28px" />
    </IconButton>
  );
};
