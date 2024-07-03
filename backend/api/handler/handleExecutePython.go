package handler

import (
	"backend/api/service"
	"net/http"

	"backend/domain/model"

	"github.com/labstack/echo/v4"
)

// HandleExecutePythonCode handles the execution of Python code
func HandleExecutePython(c echo.Context) error {
	req := new(model.PythonCodeRequest)
	if err := c.Bind(req); err != nil {
		return c.JSON(http.StatusBadRequest, model.PythonCodeResponse{Error: err.Error()})
	}

	output, err := service.ExecutePython(req.Code)
	if err != nil {
		return c.JSON(http.StatusOK, model.PythonCodeResponse{Output: "", Error: err.Error()})
	}

	return c.JSON(http.StatusOK, model.PythonCodeResponse{Output: output, Error: ""})
}