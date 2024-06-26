package service

import (
	"backend/domain/model"
	"fmt"
	"time"

	"github.com/labstack/echo/v4"
	"golang.org/x/net/websocket"
)

// HandleWebSocketConnection handles a WebSocket connection
var store = NewStore()

func HandleWebSocketConnection(c echo.Context) error {
	websocket.Handler(func(ws *websocket.Conn) {
		defer ws.Close()

		// Send the initial message
		initialResponse := model.Response{
			Username: "Server",
			Message: "Hello, Client!",
			Timestamp: time.Now().Format(time.RFC3339),
		}
		err := websocket.JSON.Send(ws, initialResponse)
		if err != nil {
			c.Logger().Error(err)
			return
		}

		for {
			// Read message from client
			var msg model.Message
			err = websocket.JSON.Receive(ws, &msg)
			if err != nil {
				c.Logger().Error(err)
				return
			}

			// Save message to store
			store.SaveMessage(msg.Username, msg)

			// Create response message
			response := model.Response{
				Username:  msg.Username,
				Message:  fmt.Sprintf("\"%s\" received!", msg.Message),
				Timestamp: time.Now().Format(time.RFC3339),
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
