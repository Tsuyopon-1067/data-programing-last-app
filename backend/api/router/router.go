package router

import (
	"backend/api/handler"

	"github.com/labstack/echo/v4"
)

// SetupRoutes sets up the routes for the application
func SetupRoutes(e *echo.Echo) {
	e.GET("/ws", handler.WebSocketHandler)
	e.GET("/csv/username", handler.HandleUsernameSortedCSV)
	e.GET("/csv/date", handler.HandleDateSortedCSV)
	e.GET("/fetch/username", handler.HandleFetchUsername)
	e.GET("/fetch/news", handler.HandleFetchNews)
	e.POST("/execute/python", handler.HandleExecutePython)
}
