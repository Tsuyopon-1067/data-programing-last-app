import { Button } from "@mui/material";
import { ReactNode } from "react";
import styles from "./NaviButton.module.css";
import { useNavigate } from "react-router-dom";

export const NaviButton: React.FC<{ children: ReactNode, name: string, url: string }> = ({ children, name, url }) => {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => navigate(url)}
      variant="text"
      sx={{
        color: "black",
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
