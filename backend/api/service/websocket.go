package service

import (
	"log"

	"github.com/gorilla/websocket"
)

var clients = make(map[*websocket.Conn]bool)

func Broadcast(message []byte) {
    for client := range clients {
        err := client.WriteMessage(websocket.TextMessage, message)
        if err != nil {
            log.Printf("error: %v", err)
            client.Close()
            delete(clients, client)
        }
    }
}
