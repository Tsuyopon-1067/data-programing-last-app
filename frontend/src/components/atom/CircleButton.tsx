import { ReactNode } from "react";
import styles from "./CircleButton.module.css";

export const CircleButton: React.FC<{
  disabled: boolean;
  onClick: () => void;
  children: ReactNode;
}> = ({ disabled, onClick, children }) => {
  if (disabled) {
    return (
      <button className={styles.button} disabled>
        {children}
      </button>
    )
  }
  return (
    <button
      className={styles.button}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
