package handler

import (
	"backend/api/service"
	"net/http"

	"github.com/labstack/echo/v4"
)

func HandleFetchUsername(c echo.Context) error {
	userIP := c.Request().RemoteAddr
	userName := service.GenerateUserName(userIP)
	return c.JSON(http.StatusOK, map[string]string{
		"username": userName,
	})
}
