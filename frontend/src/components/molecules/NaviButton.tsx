import { Button, IconButton } from "@mui/material";
import { ReactNode, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ResponsiveContext } from "../../App";
import styles from "./NaviButton.module.css";

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
          color: "#757575",
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
  return (
    <div style={{ marginLeft: "-8px" }}>
      <IconButton
        onClick={() => navigate(url)}
        sx={{
          paddingLeft: 0,
          paddingRight: 0,
          width: "44px",
        }}
      >
        {children}
      </IconButton>
    </div>
  );
};
