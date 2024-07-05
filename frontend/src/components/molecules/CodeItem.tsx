import { useState } from "react";
import styles from "./CodeItem.module.css";
import { CodeArea } from "../atom/CodeArea";
import { Card, CardContent, IconButton, Stack } from "@mui/material";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { CodeSendData } from "../../types/codeType";

export const CodeItem = () => {
  const [code, setCode] = useState<string>("");
  const [result, setResult] = useState<string>("hogehoge");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const sendData: CodeSendData = { code: code };
    const res = await fetch('/execute/python', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sendData),
    });

    const data = await res.json();
    setResult(data.output);
  };

  return (
    <div className={styles.main}>
      <Card
        sx={{
          padding: "0 0 4px 0",
        }}
      >
        <CardContent
          sx={{
            padding: "0",
            "&:last-child": {
              paddingBottom: 0
            }
          }}
        >
          <Stack
            margin={0}
            sx={{
              boxSizing: "borderBox"
            }}
          >
            <div className={styles.codeContainer}>
              <div className={styles.buttonArea}>
                <IconButton onClick={handleSubmit}>
                  <PlayCircleIcon />
                </IconButton>
              </div>
              <div className={styles.codeArea}>
                <CodeArea value={code} setValue={setCode} />
              </div>
            </div>
            <div className={styles.codeContainer}>
              <div className={styles.resultArea}>
                {result}
              </div>
            </div>
          </Stack >
        </CardContent>
      </Card>
    </div>
  )
}
