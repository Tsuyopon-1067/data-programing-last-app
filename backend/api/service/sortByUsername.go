package service

import (
	"backend/domain/model"
	"sort"
)

func SortByUsername(messages []model.Message) {
	sort.Slice(messages, func(i, j int) bool {
		return messages[i].Username < messages[j].Username
	})
}