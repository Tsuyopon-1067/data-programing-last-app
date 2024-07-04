package service

import (
	"backend/domain/model"
	"bytes"
	"encoding/json"
	"io"
	"net/http"
)

func FetchWordCloud() ([]byte, string, error) {
	// 全ての投稿を統合する
	allMessages := ""
	for _, msg := range Store.GetAllMessages() {
		allMessages += msg.Message + " "
	}
	allMessages = allMessages[:len(allMessages)-1]
	requestData := model.WordCloudRequest{Content: allMessages}
	postData, err := json.Marshal(requestData)
	if err != nil {
		return nil, "", err
	}

	// POSTリクエストを送信
	// 画像データはresp.body
	resp, err := http.Post("http://python:8081/fetch/wordcloud", "application/json", bytes.NewBuffer(postData))
	if err != nil {
		return nil, "", err
	}
	defer resp.Body.Close()

	// Content-Type ヘッダーを取得
	contentType := resp.Header.Get("Content-Type")
	if contentType == "" {
		contentType = "application/octet-stream" // デフォルトのContent-Type
	}

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, "", err
	}

	return body, contentType, nil
}
