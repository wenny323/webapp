# 待辦事項清單應用程式

一個使用 Node.js + Express 建構的前後端分離的待辦事項應用。

## 功能特點

- ✅ 新增待辦事項
- ✅ 刪除單個待辦事項
- ✅ 清空所有待辦事項
- ✅ 資料持久化儲存（JSON 檔案）
- ✅ 現代化的使用者介面
- ✅ RESTful API 架構

## 技術堆疊

- **後端**: Node.js + Express
- **前端**: HTML + CSS + JavaScript (Vanilla JS)
- **資料儲存**: JSON 檔案

## 專案結構

```
1-3/
├── server.js           # Express 伺服器 (監聽 port 1800)
├── storage.js          # 資料儲存模組
├── package.json        # 專案依賴配置
├── todos.json          # 資料儲存檔案 (自動產生)
├── public/             # 靜態檔案目錄
│   └── index.html      # 前端頁面
└── README.md           # 說明文件
```

## 安裝步驟

1. 安裝依賴套件：
```bash
npm install
```

## 執行應用

1. 啟動伺服器：
```bash
npm start
```

或使用開發模式（自動重啟）：
```bash
npm run dev
```

2. 開啟瀏覽器訪問：
```
http://localhost:1800
```

## API 介面說明

### 獲取所有待辦事項
- **URL**: `/api/todos`
- **方法**: `GET`
- **回應範例**:
```json
{
  "success": true,
  "data": [
    {
      "id": 1697123456789,
      "text": "完成作業",
      "createdAt": "2023-10-12T12:34:56.789Z"
    }
  ]
}
```

### 新增待辦事項
- **URL**: `/api/todos`
- **方法**: `POST`
- **請求內容**:
```json
{
  "text": "待辦事項內容"
}
```
- **回應範例**:
```json
{
  "success": true,
  "data": {
    "id": 1697123456789,
    "text": "待辦事項內容",
    "createdAt": "2023-10-12T12:34:56.789Z"
  }
}
```

### 刪除待辦事項
- **URL**: `/api/todos/:id`
- **方法**: `DELETE`
- **回應範例**:
```json
{
  "success": true,
  "data": []
}
```

### 清空所有待辦事項
- **URL**: `/api/todos`
- **方法**: `DELETE`
- **回應範例**:
```json
{
  "success": true,
  "data": []
}
```

## 開發說明

- 伺服器埠號: **1800**
- 資料儲存: 使用 `todos.json` 檔案進行持久化儲存
- 前端透過 Fetch API 與後端進行通訊
- 支援錯誤處理和使用者提示

## 注意事項

- 首次執行時會自動建立 `todos.json` 檔案
- 確保埠號 1800 未被其他應用程式佔用
- 資料儲存在 `todos.json` 檔案中，刪除此檔案將清空所有資料

## License

ISC
