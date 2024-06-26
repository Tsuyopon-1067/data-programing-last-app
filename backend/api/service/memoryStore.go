package service

import (
	"backend/domain/model"
	"sync"
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
