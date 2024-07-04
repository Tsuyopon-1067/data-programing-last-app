package handler

import (
	"backend/api/service"
	"net/http"

	"github.com/labstack/echo/v4"
)

// Pythonサーバ上で生成されたword cloud画像をクライアントに返す
func HandleWordCloud(c echo.Context) error {
	// FetchWordCloudを呼び出して画像データを取得
	body, contentType, err := service.FetchWordCloud()
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{
			"error":  "Failed to fetch word cloud",
			"detail": err.Error(),
		})
	}

	if contentType == "" {
		contentType = "application/octet-stream" // デフォルトのContent-Type
	}

	// クライアントにレスポンスを返す
	c.Response().Header().Set(echo.HeaderContentType, contentType)
	c.Response().WriteHeader(http.StatusOK)
	if _, err := c.Response().Writer.Write(body); err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{
			"error":  "Failed to send response to client",
			"detail": err.Error(),
		})
	}

	return nil
}
