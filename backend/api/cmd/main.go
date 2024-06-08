package main

import (
	"backend/api/router"
	"log"
	"net/http"
)

func main() {
    r := router.SetupRouter()
    log.Fatal(http.ListenAndServe(":8080", r))
}
