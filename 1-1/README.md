# Weather App - Node.js Full Stack

完整的天氣應用程式，使用 Node.js 開發，包含前端、後端 API 和資料儲存功能。

## 🌟 功能特色

- 🌤️ **即時天氣查詢** - 使用 wttr.in API 獲取天氣資訊
- 📜 **搜尋歷史** - 自動記錄最近 10 筆搜尋
- 💾 **資料持久化** - 使用 JSON 檔案儲存
- 🎨 **現代化 UI** - 美觀的漸層設計和流暢動畫
- 📱 **響應式設計** - 完美支援手機和平板

## 🚀 快速開始

### 本地運行

```bash
# 1. 安裝依賴
npm install

# 2. 啟動伺服器
npm start

# 3. 在瀏覽器開啟
http://localhost:2200
```

### CodeSandbox 部署

1. 前往 [CodeSandbox.io](https://codesandbox.io)
2. Import from GitHub: `https://github.com/wenny323/webapp`
3. 自動啟動，無需額外配置

## 📦 技術架構

### 後端 (Port 2200)
- **框架**: Express.js
- **API**: RESTful 設計
- **儲存**: JSON 檔案系統
- **CORS**: 已啟用跨域支援

### 前端
- **技術**: Vanilla JavaScript (無框架)
- **樣式**: CSS3 (漸層、動畫)
- **響應式**: Flexbox + Grid

### Dependencies
```json
{
  "express": "^4.18.2",      // Web 框架
  "node-fetch": "^2.7.0",    // HTTP 請求
  "cors": "^2.8.5"           // CORS 支援
}
```

## 🔌 API 端點

### 1. 查詢天氣
```http
GET /api/weather/:city
```
**回應範例**:
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

### 3. 清除所有歷史
```http
DELETE /api/history
```

### 4. 刪除單筆記錄
```http
DELETE /api/history/:id
```

### 5. 健康檢查
```http
GET /api/health
```

## 📂 專案結構

```
1-1/
├── server.js                   # Node.js 後端伺服器
├── package.json                # 專案設定和依賴
├── public/                     # 前端靜態檔案
│   ├── index.html              # 主頁面
│   ├── style.css               # 樣式表
│   └── app.js                  # 前端邏輯
├── .gitignore                  # Git 忽略規則
├── sandbox.config.json         # CodeSandbox 配置
└── README.md                   # 本檔案
```

## ⚙️ 環境需求

- Node.js >= 14.0.0
- npm >= 6.0.0

## 🎯 使用方式

1. **搜尋天氣**
   - 輸入城市名稱（例如：Taipei, Tokyo, New York）
   - 點擊 "Search" 或按 Enter
   - 查看溫度、風速、濕度

2. **查看歷史**
   - 右側自動顯示搜尋記錄
   - 包含時間戳記

3. **管理歷史**
   - 點擊 "Delete" 刪除單筆
   - 點擊 "Clear All" 清除全部

## 🌐 天氣資料來源

使用 [wttr.in](https://wttr.in) API：
- 免費、開源
- 支援全球城市
- 即時天氣資訊

## 📝 授權

MIT License

## 👤 作者

Weather App - Node.js Full Stack Project