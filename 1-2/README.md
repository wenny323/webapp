# Weather App - Pure Backend (Server-Side Rendering)

完整的天氣應用程式，使用 **純後端渲染**（Server-Side Rendering）架構，所有頁面由後端產生。

## 🎯 架構特色

### 與 1-1 專案的差異：

| 特性 | 1-1 (前後端分離) | 1-2 (純後端渲染) |
|------|-----------------|-----------------|
| **架構** | 前端 + REST API | Server-Side Rendering |
| **Port** | 2200 | 3500 |
| **前端技術** | Vanilla JavaScript | EJS 模板引擎 |
| **渲染方式** | 客戶端渲染 (CSR) | 伺服器端渲染 (SSR) |
| **互動方式** | fetch API 呼叫 | HTML Form POST |
| **頁面更新** | AJAX 動態更新 | 整頁重新載入 |

## 🌟 功能特色

- 🖥️ **純後端渲染** - 使用 EJS 模板引擎產生 HTML
- 📝 **表單提交** - 傳統 HTML Form POST 互動
- 🌤️ **即時天氣查詢** - 使用 wttr.in API
- 📜 **搜尋歷史** - 自動記錄最近 10 筆搜尋
- 💾 **資料持久化** - 使用 JSON 檔案儲存
- 🎨 **內嵌樣式** - CSS 直接寫在 EJS 模板中

## 🚀 快速開始

### 本地運行

```bash
# 1. 安裝依賴
npm install

# 2. 啟動伺服器
npm start

# 3. 在瀏覽器開啟
http://localhost:3500
```

### CodeSandbox 部署

直接開啟：
```
https://codesandbox.io/s/github/wenny323/webapp/tree/main/1-2
```

## 📦 技術架構

### 後端 (Port 3500)
- **框架**: Express.js
- **模板引擎**: EJS (Embedded JavaScript)
- **路由**: 
  - `GET /` - 首頁
  - `POST /search` - 搜尋天氣
  - `POST /clear-history` - 清除歷史
  - `POST /delete/:id` - 刪除單筆記錄
- **儲存**: JSON 檔案系統

### 前端（EJS 模板）
- **技術**: EJS 模板語法
- **樣式**: 內嵌 CSS
- **表單**: HTML Form POST
- **無 JavaScript**: 純 HTML + CSS（不使用前端 JS）

### Dependencies
```json
{
  "express": "^4.18.2",         // Web 框架
  "ejs": "^3.1.9",              // 模板引擎
  "node-fetch": "^2.7.0",       // HTTP 請求
  "body-parser": "^1.20.2"      // 表單解析
}
```

## 📂 專案結構

```
1-2/
├── server.js                   # Node.js 後端伺服器
├── package.json                # 專案設定和依賴
├── views/                      # EJS 模板檔案
│   └── index.ejs               # 主頁面模板
├── .gitignore                  # Git 忽略規則
├── sandbox.config.json         # CodeSandbox 配置
└── README.md                   # 本檔案
```

## 🔌 路由說明

### GET /
顯示首頁，包含：
- 搜尋表單
- 天氣資訊（如果有）
- 搜尋歷史列表

### POST /search
處理天氣搜尋：
1. 接收表單提交的城市名稱
2. 向 wttr.in API 請求天氣資料
3. 儲存搜尋記錄
4. 重新渲染頁面顯示結果

### POST /clear-history
清除所有搜尋歷史並重新導向首頁

### POST /delete/:id
刪除指定 ID 的搜尋記錄並重新導向首頁

## 🎨 EJS 模板語法

```ejs
<!-- 條件渲染 -->
<% if (weatherData) { %>
  <div><%= weatherData %></div>
<% } %>

<!-- 迴圈 -->
<% history.forEach(item => { %>
  <div><%= item.city %></div>
<% }) %>

<!-- 變數輸出 -->
<%= searchedCity %>
```

## ⚙️ 環境需求

- Node.js >= 14.0.0
- npm >= 6.0.0

## 🎯 使用方式

1. **搜尋天氣**
   - 輸入城市名稱
   - 點擊 "Search" 按鈕
   - 頁面重新載入並顯示結果

2. **查看歷史**
   - 右側自動顯示搜尋記錄
   - 包含時間戳記

3. **管理歷史**
   - 點擊 "Delete" 刪除單筆
   - 點擊 "Clear All" 清除全部

## 🆚 與 1-1 的比較

### 優點：
- ✅ 簡單直觀，不需要前端 JavaScript
- ✅ SEO 友善（伺服器端渲染）
- ✅ 首次載入更快（已渲染完成的 HTML）
- ✅ 適合傳統 Web 應用

### 缺點：
- ❌ 每次互動都需要重新載入頁面
- ❌ 使用者體驗較不流暢
- ❌ 伺服器負擔較重（每次都要渲染）

## 🌐 天氣資料來源

使用 [wttr.in](https://wttr.in) API

## 📝 授權

MIT License
