# CodeSandbox 部署指南

## 🚀 部署方式

### 方法 1：直接開啟連結（最快）
點擊或複製此連結：
```
https://codesandbox.io/s/github/wenny323/webapp/tree/main/1-1
```

### 方法 2：從 GitHub 匯入
1. 前往 [CodeSandbox.io](https://codesandbox.io)
2. 點擊 "Import from GitHub"
3. 輸入：`https://github.com/wenny323/webapp/tree/main/1-1`
4. 自動啟動

### 方法 3：從根目錄匯入
1. Import：`https://github.com/wenny323/webapp`
2. 根目錄的 `package.json` 會自動進入 `1-1` 資料夾並啟動

### 自動執行流程
CodeSandbox 會自動：
- ✅ 讀取 `package.json`
- ✅ 執行 `npm install`
- ✅ 啟動伺服器（`npm start`）
- ✅ 在 port 2200 運行
- ✅ 提供預覽 URL

## 🔍 疑難排解

### 問題：Cannot find module
**解決方案**:
```bash
cd 1-1
npm install
```

### 問題：API load failed
**原因**: API URL 配置問題

**已修復**: 前端現在會自動偵測正確的 URL
- 本地：`http://localhost:2200/api`
- CodeSandbox：自動使用 CodeSandbox URL

### 問題：CORS 錯誤
**已解決**: 伺服器已啟用 CORS 支援

## 🧪 測試

### 測試 API
訪問：`你的URL/api/health`

預期回應：
```json
{"success": true, "message": "Server is running", "port": 2200}
```

### 測試功能
1. 輸入城市名稱（例如：Taipei）
2. 點擊 Search
3. 查看天氣資料和搜尋歷史

## ⚠️ 注意事項

### 資料持久化
- CodeSandbox 容器重啟後，`search-history.json` 會清空
- 這是正常行為
- 如需永久儲存，建議使用外部資料庫

### 自動休眠
- 免費版 CodeSandbox 會在閒置後休眠
- 下次訪問時會自動喚醒

## 📝 相關資源

- [CodeSandbox 文檔](https://codesandbox.io/docs)
- [專案 README](./README.md)
