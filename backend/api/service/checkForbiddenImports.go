package service

import (
	"fmt"
	"regexp"
)

var forbiddenImports = []string{
	"tkinter",
	"PyQt5",
	"PySide2",
	"wx",
	"kivy",
	"os",
	"sys",
	"subprocess",
	"shutil",
	"pickle",
	"eval",
	"exec",
	"matplotlib",
	// Add more dangerous packages as needed
}

// CheckForbiddenImports checks if the given code contains forbidden imports
func CheckForbiddenImports(code string) error {
	for _, imp := range forbiddenImports {
		match, err := regexp.MatchString(fmt.Sprintf(`\bimport\b.*\b%s\b`, imp), code)
		if err != nil {
			return err
		}
		if match {
			return fmt.Errorf("import of package '%s' is forbidden", imp)
		}
	}
	return nil
}