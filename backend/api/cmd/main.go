package main

import (
	"backend/api/router"
	"fmt"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

// main is the entry point for the application
func main() {
	// Create a new Echo instance
	e := echo.New()
	e.Use(middleware.Logger())

	// Set up the routes
	router.SetupRoutes(e)
	e.Static("/", "public")

	// Start the server
	fmt.Println("Server is starting on port 8080...")
	fmt.Println("http://localhost:8080")
	e.Logger.Fatal(e.Start(":8080"))
}
