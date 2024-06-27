import { Stack } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { ReceiveMessageType } from "../../types/receiveMessage";
import { SendMessageType } from "../../types/sendMessage";
import { PostForm } from "../molecules/PostForm";
import { PostItem } from "../molecules/PostItem";

export const TimeLine = () => {
  const ws = useRef<WebSocket | null>(null);
  const [pastPostsData, setPastPostsData] = useState<ReceiveMessageType[]>([]);

  useEffect(() => {
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

  const handleSend = (name: string, content: string) => {
    if (ws.current) {
      const message: SendMessageType = {
        username: name || "風吹けば名無し",
        message: content,
      };
      ws.current.send(JSON.stringify(message));
    }
  };

  const PastPosts = () => {
    return (
      pastPostsData.map((postData) => (
        <PostItem
          name={postData.username}
          content={postData.message}
          date={postData.timestamp}
        />
      ))
    );
  }

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      spacing={0}
    >
      <PostForm handleSend={handleSend} />
      <PastPosts />
    </Stack>
  );
};
