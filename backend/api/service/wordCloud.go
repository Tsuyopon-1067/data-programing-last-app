package service

import (
	"fmt"
	"io/ioutil"
	"log"
	"os"
	"os/exec"
)

func FetchWordCloud() (err, string) {
	allMessages := ""
	for _, msg := range Store.GetAllMessages() {
		websocket.JSON.Send(ws, msg)
	}

	cmd := exec.Command("python3", "wordcloud.py", allMessages)
	err := cmd.Run()
	if err != nil {
		log.Fatalf("Python script execution failed with error: %v", err)
	}

	fileName := "../../public/wordCloud/" + generateFileName() + ".png"
	if err != nil {
		log.Fatalf("Failed to read image file: %v", err)
	}
	return err, imgData
}

func generateFileName() string {
	timestamp := now.Format("20060102150405")
	rand.Seed(time.Now().UnixNano())
	randomNumber := rand.Intn(10000)
	result := fmt.Sprintf("%s%04d", timestamp, randomNumber)
	return resutlt
}
