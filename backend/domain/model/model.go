package model

type Message struct {
	Username string `json:"username"`
	Message  string `json:"message"`
	TimeStamp string `json:"timestamp"`
}

type Response struct {
	Username string `json:"username"`
	Message  string `json:"message"`
	TimeStamp string `json:"timestamp"`
}