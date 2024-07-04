package service

import (
	"backend/domain/model"
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
)

func ExecutePython(code string) (string, error) {
	ifForbidden := CheckForbiddenImports(code)
	if ifForbidden != nil {
		return "", ifForbidden
	}
	pythonServerURL := "http://python-server:8081/execute"
	requestBody, err := json.Marshal(model.PythonCodeRequest{Code: code})
	if err != nil {
		return "", fmt.Errorf("failed to marshal request: %v", err)
	}

	resp, err := http.Post(pythonServerURL, "application/json", bytes.NewBuffer(requestBody))
	if err != nil {
		return "", fmt.Errorf("failed to send request: %v", err)
	}
	defer resp.Body.Close()

	var response model.PythonCodeResponse
	if err := json.NewDecoder(resp.Body).Decode(&response); err != nil {
		return "", fmt.Errorf("failed to decode response: %v", err)
	}

	if response.Error != "" {
		return "", fmt.Errorf(response.Error)
	}

	return response.Output, nil
}