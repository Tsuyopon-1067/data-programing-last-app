backend/
├── api/
│   ├── cmd/
│   │   └── main.go
│   ├── handler/
│   │   ├── csvHandler.go
│   │   ├── fetchNews.go
│   │   ├── fetchUserName.go
│   │   └── wsHandler.go
│   ├── router/
│   │   └── router.go
│   └── service/
│       ├── convertToCSV.go
│       ├── fetchNewsJson.go
│       ├── generateUserName.go
│       ├── hub.go
│       ├── memoryStore.go
│       ├── sortByDate.go
│       ├── sortByUsername.go
│       └── websocket.go
├── domain/
│   └── model/
│       └── model.go
├── docs/
│   ├── directory-strategy.md
│   └── get-started.md
├── go.mod
└── go.sum