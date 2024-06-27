package handler

import (
	"backend/api/service"
	"net/http"

	"github.com/labstack/echo/v4"
)

func HandleFetchNews(c echo.Context) error {
	newsList := service.FetchNewsJson()
	return c.JSON(http.StatusOK, newsList)
}
