package service

import (
	"crypto/rand"
	"math"
	"math/big"
)

// 一意のクライアントIDを生成する
func GenerateUserName() string {
	// 0-9, a-z, A-Z 62文字 これを8文字繋げた文字列を生成し先頭に@をつける
	const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
	const length = 8
	max := math.Pow(float64(len(letters)), length)
	rndnum, _ := rand.Int(rand.Reader, big.NewInt(int64(max)))
	rndint := rndnum.Int64()
	username := make([]byte, 8)
	for i := 0; i < length; i++ {
		idx := rndint % 62
		username[i] = letters[idx]
		rndint /= 62
	}

	return "@" + string(username)
}