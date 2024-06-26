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