import { Button } from "@mui/material";
import { ReactNode } from "react";
import styles from "./NaviButton.module.css";

export const NaviButton: React.FC<{ children: ReactNode, name: string }> = ({ children, name }) => {
  return (
    <Button
      variant="text"
      sx={{
        color : "black",
        fontSize: "22px",
        borderRadius: "16px",
      }}
    >
      <div className={styles.buttonGrid}>
        <div className={styles.iconArea}>
          <div className={styles.iconMiddle}> {children} </div>
        </div>
        <div className={styles.nameArea}>
          {name}
        </div>
      </div>
    </Button>
  );
}