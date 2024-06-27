package service

import (
	"backend/domain/model"
	"sync"

	"golang.org/x/net/websocket"
)

type Hub struct {
	// クライアントのWebSocketコネクションを保持するマップ
	clients map[*websocket.Conn]bool
	// クライアントのリストへの変更を管理するためのMutex
	mu sync.Mutex
	// ブロードキャスト用のメッセージを送るチャンネル
	broadcast chan model.Message
}

var hub = &Hub{
	clients: make(map[*websocket.Conn]bool),
	broadcast: make(chan model.Message),
}

func (h *Hub) run() {
	for message := range h.broadcast {
		h.mu.Lock()
		for client := range h.clients {
			err := websocket.JSON.Send(client, message)
			if err != nil {
				// エラー処理: コネクションの削除など
				client.Close()
				delete(h.clients, client)
			}
		}
		h.mu.Unlock()
	}
}

func init() {
	go hub.run()
}
