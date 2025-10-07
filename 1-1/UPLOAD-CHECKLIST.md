# 📋 CodeSandbox 上傳檢查清單

## ✅ 必須上傳的檔案

### 核心檔案
- [x] `server.js` - Node.js 後端伺服器（port 2200）
- [x] `package.json` - 專案設定和相依套件
- [x] `sandbox.config.json` - CodeSandbox 配置

### 前端檔案 (public/ 資料夾)
- [x] `public/index.html` - 主頁面
- [x] `public/style.css` - 樣式表
- [x] `public/app.js` - 前端 JavaScript

### 文件檔案（推薦）
- [x] `README.md` - 專案說明
- [x] `CODESANDBOX-SETUP.md` - 部署指南
- [x] `.gitignore` - Git 忽略規則

## ❌ 不需要上傳的檔案

- [ ] `node_modules/` - 會自動安裝
- [ ] `package-lock.json` - 會自動產生
- [ ] `search-history.json` - 會自動產生
- [ ] ~~所有 React 相關檔案~~ - 已刪除
- [ ] ~~所有 Vue 相關檔案~~ - 已刪除
- [ ] ~~所有 CodePen 相關檔案~~ - 已刪除
- [ ] ~~`start.sh`~~ - 已刪除

## 📦 需要的 Dependencies

### package.json 中定義的套件：

```json
"dependencies": {
  "express": "^4.18.2",      // ✅ Web 框架
  "node-fetch": "^2.7.0",    // ✅ HTTP 請求庫
  "cors": "^2.8.5"           // ✅ CORS 中介軟體
}
```

### 說明：
1. **express** - Node.js 的 Web 應用框架，用於建立 API 端點
2. **node-fetch** - 在 Node.js 中使用 fetch API 來請求外部 API (wttr.in)
3. **cors** - 允許跨域請求，讓前端可以呼叫後端 API

這三個套件都會在 CodeSandbox 中自動安裝！

## 🚀 上傳後自動執行流程

1. CodeSandbox 讀取 `sandbox.config.json`
2. 識別為 Node.js 專案
3. 自動執行 `npm install` 安裝 dependencies
4. 執行 `npm start` 啟動伺服器
5. 伺服器在 port 2200 上運行
6. 提供瀏覽器預覽 URL

## 🎯 最終檔案結構

```
hw2/
├── server.js                    ✅ 上傳
├── package.json                 ✅ 上傳
├── sandbox.config.json          ✅ 上傳
├── README.md                    ✅ 上傳
├── CODESANDBOX-SETUP.md        ✅ 上傳
├── UPLOAD-CHECKLIST.md         ✅ 上傳
├── .gitignore                   ✅ 上傳
└── public/                      ✅ 上傳整個資料夾
    ├── index.html
    ├── style.css
    └── app.js
```

## 📝 快速總結

### 要上傳的檔案數量：
- **4 個核心檔案** (server.js, package.json, sandbox.config.json, .gitignore)
- **3 個前端檔案** (public/ 資料夾內)
- **3 個文件檔案** (README.md, CODESANDBOX-SETUP.md, UPLOAD-CHECKLIST.md)

### 需要安裝的 Dependencies：
- **3 個套件** (express, node-fetch, cors)

### 全部都會自動處理！ 🎉
