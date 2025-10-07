# CodeSandbox 部署注意事項

## ✅ 已修復的問題

### 1. API URL 動態偵測
前端 `app.js` 現在會自動偵測運行環境：
- **本地開發**: 使用 `http://localhost:2200/api`
- **CodeSandbox**: 自動使用 CodeSandbox 提供的 URL

### 2. CORS 已啟用
伺服器已啟用 CORS，允許跨域請求。

## 🚀 在 CodeSandbox 中運行

### 自動啟動
CodeSandbox 會自動：
1. 讀取根目錄的 `package.json`
2. 執行 `npm start`
3. 進入 `1-1` 資料夾
4. 安裝 dependencies
5. 啟動伺服器在 port 2200

### 手動檢查
如果遇到問題，可以在 CodeSandbox Terminal 中執行：

```bash
cd 1-1
npm install
npm start
```

## 🔍 常見問題排除

### 問題 1: "load failed" 錯誤
**原因**: 
- API URL 配置錯誤
- CORS 未啟用
- 伺服器未啟動

**解決方案**:
1. 檢查 Console 中的詳細錯誤訊息
2. 確認伺服器正在運行（查看 Terminal）
3. 測試 API 端點：訪問 `/api/health`

### 問題 2: "Cannot find module" 錯誤
**原因**: Dependencies 未安裝

**解決方案**:
```bash
cd 1-1
npm install
```

### 問題 3: Port 衝突
**原因**: Port 2200 已被佔用

**解決方案**:
CodeSandbox 會自動處理 port mapping，無需修改。

## 🧪 測試 API

在 CodeSandbox 中，你可以測試以下端點：

### 1. Health Check
```
GET /api/health
```
應該返回：
```json
{"success": true, "message": "Server is running", "port": 2200}
```

### 2. 查詢天氣
```
GET /api/weather/Taipei
```

### 3. 查看歷史
```
GET /api/history
```

## 📝 環境變數

如需設定環境變數：
1. 在 CodeSandbox 中點擊 "Server Control Panel"
2. 添加環境變數
3. 重啟伺服器

## ⚠️ 限制

### CodeSandbox 免費版限制：
- 容器會在閒置後自動停止
- 檔案儲存 (`search-history.json`) 在容器重啟後會清空
- 建議使用外部資料庫（如 MongoDB Atlas）來持久化資料

## 🔗 相關資源

- [CodeSandbox 文檔](https://codesandbox.io/docs)
- [Express.js 文檔](https://expressjs.com/)
- [wttr.in API](https://github.com/chubin/wttr.in)
