# Web Application Projects

這是一個包含多個 Web 應用程式專案的 Repository。

## 📂 專案列表

### 1-1: Weather App (Node.js Full Stack)
完整的天氣應用程式，包含前端、後端和資料儲存功能。

- **技術棧**: Node.js, Express, Vanilla JavaScript
- **Port**: 2200
- **功能**: 
  - 🌤️ 即時天氣查詢
  - 📜 搜尋歷史記錄
  - 💾 JSON 檔案儲存
  - 🎨 現代化響應式 UI

**詳細說明**: [1-1/README.md](./1-1/README.md)

## 🚀 快速開始

### 在本地運行 1-1 專案：

```bash
cd 1-1
npm install
npm start
```

然後在瀏覽器開啟：`http://localhost:2200`

### 在 CodeSandbox 運行：

1. Import from GitHub: `https://github.com/wenny323/webapp`
2. CodeSandbox 會自動識別並啟動專案
3. 或直接使用根目錄的啟動腳本：`npm start`

## 📋 專案結構

```
webapp/
├── 1-1/                        # Weather App 專案
│   ├── server.js               # Node.js 後端
│   ├── package.json            # 專案設定
│   ├── public/                 # 前端檔案
│   │   ├── index.html
│   │   ├── style.css
│   │   └── app.js
│   └── README.md               # 詳細說明
├── package.json                # 根目錄設定
└── README.md                   # 本檔案
```

## 🔧 技術需求

- Node.js >= 14.0.0
- npm >= 6.0.0

## 📝 授權

MIT License
