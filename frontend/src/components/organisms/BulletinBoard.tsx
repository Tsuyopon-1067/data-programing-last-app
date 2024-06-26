import { Stack } from "@mui/material";
import { PostForm } from "../molecules/PostForm";
import { PostItem } from "../molecules/PostItem";

export const BulletinBoard = () => {
  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      spacing={0}
    >
      <PostForm />
      <PostItem name={"namaeeee"} content={"aaaaaawawaa\nhgoiehgoehgoe"} date={"1234"} />
    </Stack>
  );
};
