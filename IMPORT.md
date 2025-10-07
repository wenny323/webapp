# 🚀 CodeSandbox Import 指南

## 方法 1：Import 整個 Repository（推薦）

### 步驟：
1. 前往 [CodeSandbox.io](https://codesandbox.io)
2. 點擊 "Import from GitHub"
3. 輸入完整 URL：
   ```
   https://github.com/wenny323/webapp
   ```
4. CodeSandbox 會自動識別根目錄的 `package.json`
5. 執行 `npm start` 會自動進入 `1-1` 資料夾並啟動專案

## 方法 2：直接 Import 1-1 資料夾

### 使用完整路徑：
```
https://github.com/wenny323/webapp/tree/main/1-1
```

### 步驟：
1. 前往 [CodeSandbox.io](https://codesandbox.io)
2. 點擊 "Import from GitHub"
3. 輸入包含資料夾路徑的 URL
4. CodeSandbox 會直接載入 `1-1` 資料夾作為專案根目錄

## 方法 3：使用 CodeSandbox URL

直接在瀏覽器開啟：
```
https://codesandbox.io/s/github/wenny323/webapp/tree/main/1-1
```

這會直接開啟 `1-1` 專案！

## 🎯 推薦方式

**最簡單**：使用方法 3，直接用連結開啟
```
https://codesandbox.io/s/github/wenny323/webapp/tree/main/1-1
```

**最靈活**：使用方法 1，從根目錄 import，可以管理多個專案

## ✅ 驗證

成功 import 後，你應該看到：
- ✅ `server.js` 在專案根目錄
- ✅ `public/` 資料夾
- ✅ `package.json` 
- ✅ Terminal 顯示：`🚀 Weather App server is running...`

## 📝 注意事項

- GitHub Repository: `https://github.com/wenny323/webapp`
- 專案路徑: `1-1/`
- 分支: `main`
- Port: 2200
