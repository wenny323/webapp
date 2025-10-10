const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const storage = require('./storage');

const app = express();
const PORT = 1500;

// 設定 EJS 為模板引擎
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 中介軟體
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// 初始化儲存
storage.initStorage();

// 首頁 - 顯示所有待辦事項
app.get('/', (req, res) => {
    const todos = storage.readTodos();
    const message = req.query.message || '';
    const error = req.query.error || '';
    
    res.render('index', {
        todos: todos,
        message: message,
        error: error
    });
});

// 新增待辦事項
app.post('/add', (req, res) => {
    const { text } = req.body;
    
    if (!text || text.trim() === '') {
        return res.redirect('/?error=' + encodeURIComponent('請輸入任務內容'));
    }
    
    storage.addTodo(text.trim());
    res.redirect('/?message=' + encodeURIComponent('任務已新增'));
});

// 刪除待辦事項
app.post('/delete/:id', (req, res) => {
    const { id } = req.params;
    storage.deleteTodo(id);
    res.redirect('/?message=' + encodeURIComponent('任務已刪除'));
});

// 清空所有待辦事項
app.post('/clear', (req, res) => {
    storage.clearAllTodos();
    res.redirect('/?message=' + encodeURIComponent('已清空所有任務'));
});

// 啟動伺服器
app.listen(PORT, () => {
    console.log(`伺服器運行於 http://localhost:${PORT}`);
    console.log(`開啟瀏覽器訪問: http://localhost:${PORT}`);
});

