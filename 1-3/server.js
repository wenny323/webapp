const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const storage = require('./storage');

const app = express();
const PORT = 1800;

// 中间件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// 初始化存储
storage.initStorage();

// API 路由

// 获取所有待办事项
app.get('/api/todos', (req, res) => {
    const todos = storage.readTodos();
    res.json({
        success: true,
        data: todos
    });
});

// 添加新待办事项
app.post('/api/todos', (req, res) => {
    const { text } = req.body;
    
    if (!text || text.trim() === '') {
        return res.status(400).json({
            success: false,
            message: 'Todo text is required'
        });
    }
    
    const newTodo = storage.addTodo(text.trim());
    res.json({
        success: true,
        data: newTodo
    });
});

// 删除待办事项
app.delete('/api/todos/:id', (req, res) => {
    const { id } = req.params;
    const todos = storage.deleteTodo(id);
    res.json({
        success: true,
        data: todos
    });
});

// 清空所有待办事项
app.delete('/api/todos', (req, res) => {
    const todos = storage.clearAllTodos();
    res.json({
        success: true,
        data: todos
    });
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Open your browser and visit: http://localhost:${PORT}`);
});

