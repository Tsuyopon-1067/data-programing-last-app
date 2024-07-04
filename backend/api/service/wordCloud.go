package service

import (
	"fmt"
	"log"
	"math/rand"
	"os/exec"
	"time"
)

func FetchWordCloud() (error, string) {
	allMessages := ""
	for _, msg := range Store.GetAllMessages() {
		allMessages += msg.Message + " "
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
	return err, fileName
}

func generateFileName() string {
	timestamp := time.Now().Format("20060102150405")
	rand.Seed(time.Now().UnixNano())
	randomNumber := rand.Intn(10000)
	result := fmt.Sprintf("%s%04d", timestamp, randomNumber)
	return result
}
