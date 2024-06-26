package main

import (
	"backend/api/router"
	"fmt"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	e := echo.New()
	e.Use(middleware.Logger())

	router.SetupRoutes(e)
	e.Static("/", "public")

	fmt.Println("Server is starting on port 8080...")
	fmt.Println("http://localhost:8080")
	e.Logger.Fatal(e.Start(":8080"))
}
