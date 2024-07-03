package service

import (
	"bytes"
	"fmt"
	"os/exec"
)

func ExecutePython(code string) (string, error) {
	ifForbidden := CheckForbiddenImports(code)
	if ifForbidden != nil {
		return "", ifForbidden
	}
	cmd := exec.Command("python3", "-c", code)
	var out bytes.Buffer
	var stderr bytes.Buffer
	cmd.Stdout = &out
	cmd.Stderr = &stderr
	err := cmd.Run()
	fmt.Println(err)
	if err != nil {
		return "", fmt.Errorf(stderr.String())
	}
	return out.String(), nil
}