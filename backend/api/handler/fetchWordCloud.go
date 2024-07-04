package handler

import (
	"backend/api/service"
	"io"
	"net/http"
	"os"

	"github.com/labstack/echo/v4"
)

func HandleWordCloud(c echo.Context) error {
	err, imagePath := service.FetchWordCloud()
	imagePath = "../../public/wordCloud/" + imagePath
	if err != nil {
		return err
	}

	file, err := os.Open(imagePath)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{
			"error": "Failed to open image file",
		})
	}
	defer file.Close()

	c.Response().Header().Set(echo.HeaderContentType, "image/png")
	_, err = io.Copy(c.Response().Writer, file)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{
			"error": "Failed to send image file",
		})
	}

	return nil
}
