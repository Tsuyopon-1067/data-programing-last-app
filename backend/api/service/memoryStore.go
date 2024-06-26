package service

import (
	"backend/domain/model"
	"fmt"
	"sync"
	"time"
)

// Thread-safe in-memory store
type ThreadSafeMemoryStore struct {
	sync.RWMutex
	Messages map[string][]model.Message
}

// NewStore creates a new ThreadSafeMemoryStore
func NewStore() *ThreadSafeMemoryStore {
	return &ThreadSafeMemoryStore{
		Messages: make(map[string][]model.Message),
	}
}

// SaveMessage saves a message to the store under the given username
func (s *ThreadSafeMemoryStore) SaveMessage(username string, message model.Message) {
	s.Lock()
	defer s.Unlock()

	// Parse the existing timestamp in message to time.Time
	timestamp, err := time.Parse(time.RFC3339, message.Timestamp)
	if err != nil {
		// Handle error if the timestamp is not in RFC3339 format
		// This error handling is important to avoid storing incorrect data
		fmt.Println("Error parsing timestamp:", err)
		return
	}

	// Format the timestamp to "2006-01-02 15:04:05"
	message.Timestamp = timestamp.Format("2006-01-02 15:04:05")

	// Save the message with the formatted timestamp
	s.Messages[username] = append(s.Messages[username], message)
}

// GetMessages retrieves messages from the store
func (s *ThreadSafeMemoryStore) GetMessages(username string) []model.Message {
	s.RLock()
	defer s.RUnlock()

	return s.Messages[username]
}

// getAllMessages retrieves all messages from the store
func (s *ThreadSafeMemoryStore) GetAllMessages() []model.Message {
	s.RLock()
	defer s.RUnlock()
	var allMessages []model.Message
	for _, messages := range s.Messages {
		allMessages = append(allMessages, messages...)
	}
	return allMessages
}
