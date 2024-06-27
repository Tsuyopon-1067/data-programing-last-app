package service

import (
	"backend/domain/model"
	"fmt"
	"strconv"
	"strings"

	"github.com/gocolly/colly/v2"
)

func FetchNewsJson() []model.News {
	const baseUrl = "https://news.yahoo.co.jp/categories/"
	urls := []string{
		"domestic",
		"world",
		"business",
		"entertainment",
	}

	list := []model.News{}
	for _, lastUrl := range urls {
		url := baseUrl + lastUrl
		title, firstUrl := getFirstUrl(url)
		comments := getComments(firstUrl)
		comments = strings.Replace(comments, "解説", "", -1)

		commentsInt, err := strconv.Atoi(comments)
		if err != nil {
			fmt.Println("Error converting comments to int:", err)
		}
		newsItem := model.News{title, firstUrl, commentsInt}
		list = append(list, newsItem)
	}
	return list
}

func getFirstUrl(url string) (string, string) {
	title := ""
	firstUrl := ""
    c := colly.NewCollector()
    c.OnHTML("li.sc-1nhdoj2-0:nth-child(1) > a:nth-child(1)", func(e *colly.HTMLElement) {
        title = e.Text
		firstUrl = e.Attr("href")
    })

    err := c.Visit(url)
    if err != nil {
        fmt.Println("Error:", err)
    }
	return title, firstUrl
}

func getComments(url string) (string) {
	comments := ""
    c := colly.NewCollector()
    c.OnHTML(".sc-gdv5m1-6 > div:nth-child(1) > button:nth-child(1) > span:nth-child(1)", func(e *colly.HTMLElement) {
        comments = e.Text
    })

    err := c.Visit(url)
    if err != nil {
        fmt.Println("Error:", err)
    }
	return comments
}