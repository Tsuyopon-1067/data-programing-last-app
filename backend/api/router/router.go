package router

import (
	"backend/api/handler"

	"github.com/labstack/echo/v4"
)

func SetupRoutes(e *echo.Echo) {
	e.GET("/ws", handler.WebSocketHandler)
	e.GET("/username", handler.HandleUsernameSortedCSV)
	e.GET("/date", handler.HandleDateSortedCSV)
}
