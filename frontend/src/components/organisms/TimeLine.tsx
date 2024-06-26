import { Stack } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { PostItemType } from "../../types/postItemType";
import { SendMessageType } from "../../types/sendMessage";
import { PostForm } from "../molecules/PostForm";
import { PostItem } from "../molecules/PostItem";

export const TimeLine = () => {
  const [, setMessages] = useState<PostItemType[]>([]);
  const ws = useRef<WebSocket | null>(null);

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
      setMessages(prevMessages => [...prevMessages, data]);
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
        timestamp: new Date().toISOString(),
      };
      ws.current.send(JSON.stringify(message));
    }
  };

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      spacing={0}
    >
      <PostForm handleSend={handleSend} />
      <PostItem name={"namaeeee"} content={"aaaaaawawaa\nhgoiehgoehgoe"} date={"1234"} />
    </Stack>
  );
};
