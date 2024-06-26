package service

import (
	"backend/domain/model"
	"sort"
	"time"
)

func SortByDate(messages []model.Message) {
	sort.Slice(messages, func(i, j int) bool {
		// Parse the timestamp of the messages
		t1, err1 := time.Parse("2006-01-02 15:04:05", messages[i].Timestamp)
		t2, err2 := time.Parse("2006-01-02 15:04:05", messages[j].Timestamp)

		// If there is an error parsing the timestamp, the message is considered to be older
		if err1 != nil {
			return false
		}
		if err2 != nil {
			return true
		}
		return t1.Before(t2)
	})
}