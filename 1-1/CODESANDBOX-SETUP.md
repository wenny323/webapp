# CodeSandbox 部署指南

## 📦 上傳到 CodeSandbox 步驟

### 方法 1: 從 GitHub 匯入（推薦）
1. 將專案推送到 GitHub repository
2. 前往 [CodeSandbox.io](https://codesandbox.io)
3. 點擊 "Import from GitHub"
4. 輸入你的 GitHub repository URL
5. CodeSandbox 會自動識別並配置

### 方法 2: 直接上傳檔案
1. 前往 [CodeSandbox.io](https://codesandbox.io)
2. 選擇 "Create Sandbox" → "Import Project"
3. 上傳以下檔案和資料夾：
   - `server.js`
   - `package.json`
   - `sandbox.config.json`
   - `public/` 資料夾（包含所有前端檔案）
   - `README.md`
   - `.gitignore`

### 方法 3: 使用 CLI 上傳
```bash
# 安裝 CodeSandbox CLI
npm install -g codesandbox

# 在專案目錄中執行
codesandbox deploy
```

## 📋 需要的 Dependencies

CodeSandbox 會自動從 `package.json` 安裝以下套件：

### Production Dependencies (必須)
```json
{
  "express": "^4.18.2",      // Web 框架
  "node-fetch": "^2.7.0",    // HTTP 請求
  "cors": "^2.8.5"           // 跨域資源共享
}
```

### Development Dependencies (可選)
```json
{
  "nodemon": "^3.0.1"        // 開發時自動重啟
}
```

## 📂 必須上傳的檔案結構

```
hw2/
├── server.js                 ✅ 必須 - 後端伺服器
├── package.json              ✅ 必須 - 專案設定
├── sandbox.config.json       ✅ 必須 - CodeSandbox 配置
├── README.md                 ✅ 推薦 - 專案說明
├── .gitignore                ✅ 推薦 - Git 忽略檔案
└── public/                   ✅ 必須 - 前端檔案
    ├── index.html            ✅ 必須
    ├── style.css             ✅ 必須
    └── app.js                ✅ 必須
```

## ❌ 不需要上傳的檔案

以下檔案會自動產生或不需要上傳：
- `node_modules/` - 會自動安裝
- `package-lock.json` - 會自動產生
- `search-history.json` - 會自動產生
- 所有 React/Vue/CodePen 相關檔案（已刪除）

## ⚙️ CodeSandbox 配置說明

`sandbox.config.json` 檔案內容：
```json
{
  "template": "node",           // 使用 Node.js 範本
  "container": {
    "port": 2200,               // 伺服器 port
    "startScript": "start",     // 啟動腳本
    "node": "14"                // Node.js 版本
  }
}
```

## 🚀 CodeSandbox 自動執行

上傳完成後，CodeSandbox 會自動：
1. ✅ 安裝 `package.json` 中的所有 dependencies
2. ✅ 執行 `npm start` 啟動伺服器
3. ✅ 在 port 2200 上運行應用程式
4. ✅ 提供瀏覽器預覽

## 🔗 訪問應用程式

CodeSandbox 會提供一個 URL，格式類似：
```
https://xxxxx.csb.app
```

直接在瀏覽器中開啟即可使用 Weather App。

## 🛠️ 在 CodeSandbox 中開發

### 即時編輯
- 所有檔案都可以在線上編輯
- 改動會即時反映在預覽中
- 伺服器會自動重啟（如果有 nodemon）

### 控制台
- 點擊 "Console" 標籤查看伺服器日誌
- 可以看到 API 請求和錯誤訊息

### 終端機
- 點擊 "Terminal" 標籤開啟終端機
- 可以執行 npm 指令或查看檔案

## 📝 注意事項

### 1. Port 配置
- CodeSandbox 會自動處理 port mapping
- 前端會自動連接到正確的後端 URL
- 不需要修改 `public/app.js` 中的 API_BASE_URL

### 2. 資料儲存
- `search-history.json` 會在 CodeSandbox 中正常運作
- 但重啟容器後資料會消失
- 如需持久化，考慮使用外部資料庫

### 3. 環境變數
如需使用環境變數：
- 在 CodeSandbox 的 "Server Control Panel" 中設定
- 或在專案中建立 `.env` 檔案（記得加入 .gitignore）

## 🔧 疑難排解

### 問題：伺服器無法啟動
**解決方案：**
- 檢查 `package.json` 的 `start` script
- 確認所有 dependencies 已正確安裝
- 查看 Console 中的錯誤訊息

### 問題：前端無法連接後端
**解決方案：**
- 檢查 `public/app.js` 中的 API_BASE_URL
- 確認伺服器運行在 port 2200
- 檢查 CORS 設定

### 問題：找不到模組
**解決方案：**
- 確認 `package.json` 中有該套件
- 點擊 "Restart Sandbox" 重新安裝
- 在終端機執行 `npm install`

## 📊 功能測試清單

上傳到 CodeSandbox 後，測試以下功能：

- [ ] 頁面正常載入
- [ ] 搜尋功能正常運作
- [ ] 天氣資料正確顯示
- [ ] 搜尋歷史正常儲存
- [ ] 刪除單筆記錄功能正常
- [ ] 清除全部記錄功能正常
- [ ] 載入動畫正常顯示
- [ ] 錯誤處理正常運作

## 🎉 完成！

上傳成功後，你將擁有一個完整運行的全端 Weather App！

分享你的 CodeSandbox URL 給其他人即可展示你的專案。
