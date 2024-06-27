package service

import (
	"backend/domain/model"
	"fmt"
	"time"

	"github.com/labstack/echo/v4"
	"golang.org/x/net/websocket"
)
func HandleWebSocketConnection(c echo.Context) error {
	websocket.Handler(func(ws *websocket.Conn) {
		defer ws.Close()

		// 新しいクライアントをHubに追加
		hub.mu.Lock()
		hub.clients[ws] = true
		hub.mu.Unlock()

		// 以前のすべてのメッセージを送信
		for _, msg := range Store.GetAllMessages() {
			websocket.JSON.Send(ws, msg)
		}

		for {
			var clientMsg model.ReceivedMessage
			err := websocket.JSON.Receive(ws, &clientMsg)
			if err != nil {
				c.Logger().Error(err)
				break
			}

			// 現在の時刻をタイムスタンプとして設定
			timestamp := time.Now().Format("2006-01-02 15:04:05")
			fmt.Println("timestamp", timestamp)
			msg := model.Message{
				Username: clientMsg.Username,
				Message: clientMsg.Message,
				Timestamp: timestamp,
			}

			// Save message to store
			Store.SaveMessage(msg.Username, msg)
			response := model.Message{
				Username:  msg.Username,
				Message:   msg.Message,
				Timestamp: msg.Timestamp,
			}

			// 受け取ったメッセージをブロードキャスト
			hub.broadcast <- response
		}

		// コネクションが終了したらHubから削除
		hub.mu.Lock()
		delete(hub.clients, ws)
		hub.mu.Unlock()

	}).ServeHTTP(c.Response(), c.Request())
	return nil
}
