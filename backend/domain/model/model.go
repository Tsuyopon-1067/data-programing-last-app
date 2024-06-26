package model

import "time"

type Message struct {
	Username string `json:"username"`
	Message  string `json:"message"`
	TymeStamp time.Time `json:"timestamp"`
}

type Response struct {
	Username string `json:"username"`
	Message  string `json:"message"`
	TymeStamp time.Time `json:"timestamp"`
}