import { Box, Stack } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { ReceiveMessageType } from "../../types/receiveMessage";
import { SendMessageType } from "../../types/sendMessage";
import { PostForm } from "../molecules/PostForm";
import { PostItem } from "../molecules/PostItem";
import Tab from "@mui/material/Tab";
import Tabs from '@mui/material/Tabs';

export const TimeLine = () => {
  const ws = useRef<WebSocket | null>(null);
  const [userName, setUserName] = useState<string>("");
  const [pastPostsData, setPastPostsData] = useState<ReceiveMessageType[]>([]);
  const [displayedPost, setDisplayedPost] = useState(0);
  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setDisplayedPost(newValue);
  };

  useEffect(() => {
    fetch("./fetch/username")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUserName(data.username);
      });

    const loc = window.location;
    let uri = loc.protocol === "https:" ? "wss:" : "ws:";
    uri += "//" + loc.host;
    uri += loc.pathname + "ws";

    ws.current = new WebSocket(uri);

    ws.current.onopen = () => {
      console.log("Connected");
    };

    ws.current.onmessage = (evt) => {
      const data = JSON.parse(evt.data);
      const newData: ReceiveMessageType = {
        username: data.username,
        message: data.message,
        timestamp: data.timestamp,
      };
      setPastPostsData((prev) => [...prev, newData]);
    };

    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, []);

  const handleSend = (content: string) => {
    if (ws.current) {
      const message: SendMessageType = {
        username: userName,
        message: content,
      };
      ws.current.send(JSON.stringify(message));
    }
  };

  const PastPosts: React.FC<{ display: number }> = ({ display }) => {
    // displayが1の時は自分の投稿のみ表示
    if (display === 1) {
      return pastPostsData
        .slice()
        .reverse()
        .filter((postData) => postData.username === userName)
        .map((postData) => (
          <PostItem
            name={postData.username}
            content={postData.message}
            date={postData.timestamp}
          />
        ));
    }
    return pastPostsData
      .slice()
      .reverse()
      .map((postData) => (
        <PostItem
          name={postData.username}
          content={postData.message}
          date={postData.timestamp}
        />
      ));
  };

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      spacing={0}
    >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={displayedPost} onChange={handleChange} variant="fullWidth" >
          <Tab label="全ての投稿" />
          <Tab label="自分の投稿" />
        </Tabs>
      </Box>
      <PostForm userName={userName} handleSend={handleSend} />
      <PastPosts display={displayedPost} />
    </Stack>
  );
};
