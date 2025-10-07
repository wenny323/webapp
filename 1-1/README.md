# Weather App - Node.js Full Stack

一個使用 Node.js 開發的全端天氣應用程式，具有前端介面、後端 API 和資料儲存功能。

## 📋 功能特色

### 前端 (Frontend)
- 🎨 現代化、響應式的使用者介面
- 🔍 即時天氣搜尋功能
- 📜 搜尋歷史記錄顯示
- ⏱️ 智慧型時間顯示（幾分鐘前、幾小時前等）
- 💫 流暢的動畫效果
- 📱 手機平板完全支援

### 後端 (Backend - Port 2200)
- 🚀 Express.js 框架
- 🌐 RESTful API 設計
- 💾 JSON 檔案儲存系統
- 🔄 CORS 支援
- 📊 完整的錯誤處理

### 資料儲存 (Storage)
- 📁 使用 JSON 檔案儲存搜尋記錄
- 🗂️ 自動保存最近 10 筆搜尋記錄
- 🔐 資料持久化（重啟伺服器後保留）

## 🛠️ 技術架構

```
┌─────────────────────────────────────┐
│         Frontend (Browser)          │
│    HTML + CSS + Vanilla JS          │
│    Port: 2200 (static files)        │
└──────────────┬──────────────────────┘
               │ HTTP Requests
               │ (fetch API)
┌──────────────▼──────────────────────┐
│      Backend (Node.js + Express)    │
│        Listening on Port 2200       │
├─────────────────────────────────────┤
│  API Endpoints:                     │
│  - GET  /api/weather/:city          │
│  - GET  /api/history                │
│  - DELETE /api/history              │
│  - DELETE /api/history/:id          │
└──────────────┬──────────────────────┘
               │ File System
┌──────────────▼──────────────────────┐
│      Storage (JSON File)            │
│    search-history.json              │
└─────────────────────────────────────┘
```

## 📦 安裝步驟

### 1. 安裝 Node.js
確保你的系統已安裝 Node.js (建議 v14 或更高版本)

### 2. 安裝相依套件
```bash
npm install
```

### 3. 啟動伺服器
```bash
npm start
```

或使用開發模式（自動重啟）：
```bash
npm run dev
```

### 4. 開啟瀏覽器
在瀏覽器中開啟：
```
http://localhost:2200
```

## 📡 API 端點說明

### 1. 取得城市天氣資料
```http
GET /api/weather/:city
```
**回應範例：**
```json
{
  "success": true,
  "city": "Taipei",
  "weatherData": "+23°C 5km/h 78%",
  "timestamp": "2025-10-07T10:30:00.000Z"
}
```

### 2. 取得搜尋歷史
```http
GET /api/history
```
**回應範例：**
```json
{
  "success": true,
  "history": [
    {
      "id": 1696680000000,
      "city": "Taipei",
      "weatherData": "+23°C 5km/h 78%",
      "timestamp": "2025-10-07T10:30:00.000Z"
    }
  ]
}
```

### 3. 清除所有歷史記錄
```http
DELETE /api/history
```
**回應範例：**
```json
{
  "success": true,
  "message": "History cleared"
}
```

### 4. 刪除特定搜尋記錄
```http
DELETE /api/history/:id
```
**回應範例：**
```json
{
  "success": true,
  "message": "Search deleted"
}
```

### 5. 健康檢查
```http
GET /api/health
```
**回應範例：**
```json
{
  "success": true,
  "message": "Server is running",
  "port": 2200
}
```

## 📂 專案結構

```
hw2/
├── server.js                 # Node.js 後端伺服器
├── package.json              # 專案設定和相依套件
├── search-history.json       # 搜尋歷史儲存檔案（自動產生）
├── README.md                 # 專案說明文件
└── public/                   # 前端靜態檔案
    ├── index.html            # 主要 HTML 頁面
    ├── style.css             # 樣式表
    └── app.js                # 前端 JavaScript
```

## 🔧 開發說明

### 相依套件
- **express**: Web 框架，處理路由和中介軟體
- **cors**: 跨來源資源共享支援
- **node-fetch**: 在 Node.js 中使用 fetch API
- **nodemon**: 開發時自動重啟伺服器（開發用）

### 資料流程
1. 使用者在前端輸入城市名稱
2. 前端透過 fetch API 發送請求到後端
3. 後端接收請求，向 wttr.in API 取得天氣資料
4. 後端將搜尋記錄儲存到 JSON 檔案
5. 後端回傳天氣資料給前端
6. 前端顯示天氣資訊並更新搜尋歷史

### 資料儲存機制
- 使用 `search-history.json` 檔案儲存資料
- 自動保留最近 10 筆搜尋記錄
- 每次搜尋都會更新檔案
- 支援單筆刪除和全部清除功能

## 🎯 使用方式

1. **搜尋天氣**
   - 在輸入框輸入城市名稱（例如：Taipei, Tokyo, New York）
   - 點擊「Search」按鈕或按下 Enter 鍵
   - 等待天氣資料載入

2. **查看歷史記錄**
   - 右側會自動顯示最近的搜尋記錄
   - 包含城市名稱、天氣資料和搜尋時間

3. **刪除單筆記錄**
   - 點擊每筆記錄右側的「Delete」按鈕

4. **清除所有記錄**
   - 點擊「Clear All」按鈕
   - 確認後清除所有歷史記錄

## 🌐 天氣資料來源

本應用使用 [wttr.in](https://wttr.in) API 取得天氣資料：
- 格式：`https://wttr.in/{city}?format=%t+%w+%h`
- %t = 溫度
- %w = 風速
- %h = 濕度

## 🚀 部署注意事項

### 本地開發
- 伺服器運行在 `localhost:2200`
- 前端和後端在同一個 port

### 生產環境
如需部署到生產環境：
1. 修改 `public/app.js` 中的 `API_BASE_URL`
2. 設定環境變數 `PORT`
3. 使用 process manager（如 PM2）管理 Node.js 程序
4. 考慮使用真實資料庫（如 MongoDB）取代 JSON 檔案

## 🔒 安全性建議

- ✅ 已實作 CORS 保護
- ✅ 已進行輸入驗證
- ✅ 已實作錯誤處理
- ⚠️ 生產環境建議：
  - 加入 rate limiting
  - 使用 HTTPS
  - 加入 API 金鑰驗證
  - 使用環境變數管理敏感資訊

## 📝 授權

MIT License

## 👤 作者

Weather App - Node.js Full Stack Project
