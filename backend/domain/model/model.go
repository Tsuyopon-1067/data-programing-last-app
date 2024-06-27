package model

// Message represents a chat message
type Message struct {
	Username string `json:"username"`
	Message  string `json:"message"`
	Timestamp string `json:"timestamp"`
}

// Response represents a chat response
type Response struct {
	Username string `json:"username"`
	Message  string `json:"message"`
	Timestamp string `json:"timestamp"`
}

// クライアントから受け取るメッセージ
type ReceivedMessage struct {
	Username string `json:"username"`
	Message  string `json:"message"`
}

// ニュース1件
type News struct {
	Title string `json:"title"`
	Category string `json:"category"`
	Url string `json:"url"`
	Comments int `json:"comments"`
}