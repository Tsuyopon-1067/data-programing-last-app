package handler

import (
	"backend/api/service"

	"github.com/labstack/echo/v4"
)

// WebSocketHandler handles WebSocket connections
func WebSocketHandler(c echo.Context) error {
	return service.HandleWebSocketConnection(c)
}
