import { Stack } from "@mui/material";
import { NewsList } from "./NewsList";
import { AuthorList } from "./AuthorList";
import { SearchBar } from "../atom/SearchBar";

export const LinkList = () => {
  return (
    <Stack direction={"column"} spacing={2} maxWidth="350px" marginTop={"10px"}>
      <SearchBar />
      <NewsList />
      <AuthorList />
    </Stack>
  );
};
