package handler

import (
	"backend/api/service"
	"net/http"

	"github.com/labstack/echo/v4"
)

func HandleFetchUsername(c echo.Context) error {
	userName := service.GenerateUserName()
	return c.JSON(http.StatusOK, map[string]string{
		"username": userName,
	})
}
