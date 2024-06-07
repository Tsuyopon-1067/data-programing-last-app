package router

import (
	"backend/handler"

	"github.com/gorilla/mux"
)

func SetupRouter() *mux.Router {
    r := mux.NewRouter()
    r.HandleFunc("/ws", handler.WsHandler)
    return r
}
