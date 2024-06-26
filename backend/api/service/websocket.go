package service

import (
	"backend/domain/model"
	"time"

	"github.com/labstack/echo/v4"
	"golang.org/x/net/websocket"
)

// HandleWebSocketConnection handles a WebSocket connection
var store = NewStore()

func HandleWebSocketConnection(c echo.Context) error {
	websocket.Handler(func(ws *websocket.Conn) {
		defer ws.Close()

		// 新しい接続のために、保存されたすべてのメッセージを送信
		for _, msg := range store.GetAllMessages() {
			err := websocket.JSON.Send(ws, msg)
			if err != nil {
				c.Logger().Error(err)
				return
			}
		}

		for {
			// Read message from client
			var msg model.Message
			err := websocket.JSON.Receive(ws, &msg)
			if err != nil {
				c.Logger().Error(err)
				return
			}

			// Save message to store
			store.SaveMessage(msg.Username, msg)

			// Create response message
			response := model.Response{
				Username:  msg.Username,
				Message:  msg.Message,
				Timestamp: time.Now().Format("2006-01-02 15:04:05"),
			}

			// Send response message
			err = websocket.JSON.Send(ws, response)
			if err != nil {
				c.Logger().Error(err)
				return
			}
		}
	}).ServeHTTP(c.Response(), c.Request())
	return nil
}
