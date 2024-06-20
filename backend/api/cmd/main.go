package main

import (
	"backend/api/router"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	e := echo.New()
	e.Use(middleware.Logger())

	router.SetupRoutes(e)

	e.Logger.Fatal(e.Start(":8080"))
}
