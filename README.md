# Web Application Projects

這是一個包含多個 Web 應用程式專案的 Repository。

## 📂 專案列表

### [1-1: Weather App (前後端分離)](./1-1/)
完整的天氣應用程式 - 前後端分離架構

**技術棧**: Node.js, Express, Vanilla JavaScript  
**Port**: 2200  
**特色**: REST API, 客戶端渲染, AJAX  
**功能**: 即時天氣查詢、搜尋歷史、響應式 UI

📖 [查看詳細說明](./1-1/README.md) | 🚀 [CodeSandbox](https://codesandbox.io/s/github/wenny323/webapp/tree/main/1-1)

### [1-2: Weather App (純後端渲染)](./1-2/)
完整的天氣應用程式 - 伺服器端渲染架構

**技術棧**: Node.js, Express, EJS  
**Port**: 3500  
**特色**: Server-Side Rendering, HTML Form, 傳統 Web  
**功能**: 即時天氣查詢、搜尋歷史、後端渲染

📖 [查看詳細說明](./1-2/README.md) | 🚀 [CodeSandbox](https://codesandbox.io/s/github/wenny323/webapp/tree/main/1-2)

### [1-3: To-Do List (前後端分離)](./1-3/)
待辦事項應用程式 - 前後端分離架構 + 資料持久化

**技術棧**: Node.js, Express, Vanilla JavaScript  
**Port**: 1800  
**特色**: REST API, JSON 儲存, CRUD 操作  
**功能**: 新增/刪除任務、清空全部、資料持久化

📖 [查看詳細說明](./1-3/README.md) | 🚀 [CodeSandbox](https://codesandbox.io/s/github/wenny323/webapp/tree/main/1-3)

### [1-4: To-Do List (純後端渲染)](./1-4/)
待辦事項應用程式 - 伺服器端渲染架構 + 資料持久化

**技術棧**: Node.js, Express, EJS  
**Port**: 1500  
**特色**: Server-Side Rendering, HTML Form, 傳統 Web  
**功能**: 新增/刪除任務、清空全部、資料持久化

📖 [查看詳細說明](./1-4/README.md) | 🚀 [CodeSandbox](https://codesandbox.io/s/github/wenny323/webapp/tree/main/1-4)

## 🚀 快速開始

### 運行專案 1-1 (Port 2200)

```bash
cd 1-1
npm install
npm start
```

然後在瀏覽器開啟：`http://localhost:2200`

### 運行專案 1-2 (Port 3500)

```bash
cd 1-2
npm install
npm start
```

然後在瀏覽器開啟：`http://localhost:3500`

### 運行專案 1-3 (Port 1800)

```bash
cd 1-3
npm install
npm start
```

然後在瀏覽器開啟：`http://localhost:1800`

### 運行專案 1-4 (Port 1500)

```bash
cd 1-4
npm install
npm start
```

然後在瀏覽器開啟：`http://localhost:1500`

### CodeSandbox 部署

**快速開啟連結**:
- **1-1 專案** (Port 2200): [https://codesandbox.io/s/github/wenny323/webapp/tree/main/1-1](https://codesandbox.io/s/github/wenny323/webapp/tree/main/1-1)
- **1-2 專案** (Port 3500): [https://codesandbox.io/s/github/wenny323/webapp/tree/main/1-2](https://codesandbox.io/s/github/wenny323/webapp/tree/main/1-2)
- **1-3 專案** (Port 1800): [https://codesandbox.io/s/github/wenny323/webapp/tree/main/1-3](https://codesandbox.io/s/github/wenny323/webapp/tree/main/1-3)
- **1-4 專案** (Port 1500): [https://codesandbox.io/s/github/wenny323/webapp/tree/main/1-4](https://codesandbox.io/s/github/wenny323/webapp/tree/main/1-4)

📖 [完整 Import 指南](./IMPORT.md)

## 📋 專案結構

```
webapp/
├── 1-1/                        # Weather App (前後端分離)
│   ├── server.js               # 後端 API 伺服器
│   ├── package.json            # 專案設定
│   ├── public/                 # 前端檔案 (HTML/CSS/JS)
│   └── README.md               # 詳細說明
├── 1-2/                        # Weather App (純後端渲染)
│   ├── server.js               # 後端渲染伺服器
│   ├── package.json            # 專案設定
│   ├── views/                  # EJS 模板檔案
│   └── README.md               # 詳細說明
├── 1-3/                        # To-Do List (前後端分離)
│   ├── server.js               # Express 伺服器
│   ├── storage.js              # 資料儲存模組
│   ├── package.json            # 專案設定
│   ├── public/                 # 前端檔案 (HTML/CSS/JS)
│   └── README.md               # 詳細說明
├── 1-4/                        # To-Do List (純後端渲染)
│   ├── server.js               # Express 伺服器
│   ├── storage.js              # 資料儲存模組
│   ├── package.json            # 專案設定
│   ├── views/                  # EJS 模板檔案
│   └── README.md               # 詳細說明
└── README.md                   # 本檔案
```

## 🔧 技術需求

- Node.js >= 14.0.0
- npm >= 6.0.0

## 📝 授權

MIT License