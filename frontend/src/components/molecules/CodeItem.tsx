import { useState } from "react";
import styles from "./CodeItem.module.css";
import { CodeArea } from "../atom/CodeArea";
import { Card, CardContent, Stack } from "@mui/material";
import { CodeResultData, CodeSendData } from "../../types/codeType";
import { CodeRunStatus } from "../../types/codeRunStatus";
import { CodeButton } from "../atom/CodeButton";

export const CodeItem = () => {
  const [code, setCode] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [codeRunResultStatus, setCodeRunResultStatus] = useState<CodeRunStatus>("idle");

  const handleSubmit = async () => {
    setCodeRunResultStatus("running");

    const sendData: CodeSendData = { code: code };

    try {
      const res = await fetch('/execute/python', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sendData),
      });

      const data: CodeResultData = await res.json();

      if (data.error === "") {
        setCodeRunResultStatus("success");
        setResult(data.output);
      } else {
        setCodeRunResultStatus("error");
        setResult(data.error);
      }
    } catch (error) {
      setCodeRunResultStatus("error");
    }
  };

  return (
    <div className={styles.main}>
      <Card
        sx={{
          padding: "0",
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
                <CodeButton handleSubmit={handleSubmit} status={codeRunResultStatus} />
              </div>
              <div className={styles.codeArea}>
                <CodeArea value={code} setValue={setCode} />
              </div>
            </div>
            <div className={styles.codeContainer}>
              <div
                className={styles.resultArea}
                style={result.length !== 0 ? { paddingBottom: "4px" } : {}}
              >
                {result}
              </div>
            </div>
          </Stack >
        </CardContent>
      </Card>
    </div >
  )
}
