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
	e.Use(customMiddleware)

	// Set up the routes
	router.SetupRoutes(e)
	e.Static("/", "public")

	// Start the server
	fmt.Println("Server is starting on port 8080...")
	fmt.Println("http://localhost:8080")
	e.Logger.Fatal(e.Start(":8080"))
}

func customMiddleware(next echo.HandlerFunc) echo.HandlerFunc {
	return func(c echo.Context) error {
		switch c.Request().URL.Path {
		case "/wordcloud":
			return c.File("public/index.html")
		case "/coderunner":
			return c.File("public/index.html")
		case "/csv":
			return c.File("public/index.html")
		case "/slide":
			return c.File("public/index.html")
		case "/architecture":
			return c.File("public/index.html")
		case "/techstack":
			return c.File("public/index.html")
		case "/qr":
			return c.File("public/index.html")
		}
		return next(c)
	}
}