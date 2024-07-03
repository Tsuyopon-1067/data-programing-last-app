import { Button, IconButton } from "@mui/material";
import { ReactNode, useContext } from "react";
import styles from "./NaviButton.module.css";
import { useNavigate } from "react-router-dom";
import { ResponsiveContext } from "../../App";

export const NaviButton: React.FC<{
  children: ReactNode;
  name: string;
  url: string;
}> = ({ children, name, url }) => {
  const navigate = useNavigate();
  const responsive = useContext(ResponsiveContext);
  if (responsive?.value === "pc") {
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
          <div className={styles.nameArea}>{name}</div>
        </div>
      </Button>
    );
  }
  return <IconButton onClick={() => navigate(url)}>{children}</IconButton>;
};
