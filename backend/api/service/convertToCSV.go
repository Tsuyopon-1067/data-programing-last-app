package service

import (
	"backend/domain/model"
	"encoding/csv"
	"os"
)

func ConvertToCSV(filename string, messages []model.Message) error {
	file, err := os.Create(filename)
	if err != nil {
		return err
	}
	defer file.Close()

	writer := csv.NewWriter(file)
	defer writer.Flush()

	// CSVのヘッダーを書き込みます
	writer.Write([]string{"Username", "Message", "Timestamp"})

	// メッセージをCSVに書き込みます
	for _, message := range messages {
		err := writer.Write([]string{message.Username, message.Message, message.Timestamp})
		if err != nil {
			return err
		}
	}

	return nil
}
