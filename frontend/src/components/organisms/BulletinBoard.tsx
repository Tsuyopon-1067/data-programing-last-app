import { Stack } from "@mui/material";
import styles from "./BulletinBoard.module.css";
import { PostForm } from "../molecules/PostForm";

export const BulletinBoard = () => {
  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      spacing={1}
    >
      <PostForm />
    </Stack>
  );
};
