package handler

import (
	"backend/api/service"

	"github.com/labstack/echo/v4"
)

// HandleUsernameSortedCSV はユーザー名でソートされたCSVを返します。
func HandleUsernameSortedCSV(c echo.Context) error {
	messages := service.Store.GetAllMessages()
	service.SortByUsername(messages)
	filename := "sorted_by_username.csv"
	err := service.ConvertToCSV(filename, messages)
	if err != nil {
		return err
	}
	return c.Attachment(filename, filename)
}

// HandleDateSortedCSV は日付でソートされたCSVを返します。
func HandleDateSortedCSV(c echo.Context) error {
	messages := service.Store.GetAllMessages()
	service.SortByDate(messages)
	filename := "sorted_by_date.csv"
	err := service.ConvertToCSV(filename, messages)
	if err != nil {
		return err
	}
	return c.Attachment(filename, filename)
}
