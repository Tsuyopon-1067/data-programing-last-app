package service

import (
	"crypto/sha256"
	"encoding/hex"
	"strings"
	"time"
)

// 一意のクライアントIDを生成する
func GenerateUserName(ip string) string {
	// 現在の日付をYYYY-MM-DDの形式で取得
	currentDate := time.Now().Format("2006-01-02")
	// IPアドレスと現在の日付を結合
	inputString := strings.Split(ip, ":")[0] + currentDate
	// SHA-256でハッシュ化
	hasher := sha256.New()
	hasher.Write([]byte(inputString))
	// @から始まるユーザ名を生成
	username := "@" + hex.EncodeToString(hasher.Sum(nil))[:8]

	return username
}