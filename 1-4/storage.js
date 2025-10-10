const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'todos.json');

// 初始化資料檔案
function initStorage() {
    if (!fs.existsSync(DATA_FILE)) {
        fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2));
    }
}

// 讀取所有待辦事項
function readTodos() {
    try {
        const data = fs.readFileSync(DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('讀取待辦事項錯誤:', error);
        return [];
    }
}

// 儲存待辦事項
function saveTodos(todos) {
    try {
        fs.writeFileSync(DATA_FILE, JSON.stringify(todos, null, 2));
        return true;
    } catch (error) {
        console.error('儲存待辦事項錯誤:', error);
        return false;
    }
}

// 新增待辦事項
function addTodo(text) {
    const todos = readTodos();
    const newTodo = {
        id: Date.now(),
        text: text,
        createdAt: new Date().toISOString()
    };
    todos.push(newTodo);
    saveTodos(todos);
    return newTodo;
}

// 刪除待辦事項
function deleteTodo(id) {
    const todos = readTodos();
    const filteredTodos = todos.filter(todo => todo.id !== parseInt(id));
    saveTodos(filteredTodos);
    return filteredTodos;
}

// 清空所有待辦事項
function clearAllTodos() {
    saveTodos([]);
    return [];
}

module.exports = {
    initStorage,
    readTodos,
    addTodo,
    deleteTodo,
    clearAllTodos
};

