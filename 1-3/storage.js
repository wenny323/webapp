const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'todos.json');

// 初始化数据文件
function initStorage() {
    if (!fs.existsSync(DATA_FILE)) {
        fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2));
    }
}

// 读取所有待办事项
function readTodos() {
    try {
        const data = fs.readFileSync(DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading todos:', error);
        return [];
    }
}

// 保存待办事项
function saveTodos(todos) {
    try {
        fs.writeFileSync(DATA_FILE, JSON.stringify(todos, null, 2));
        return true;
    } catch (error) {
        console.error('Error saving todos:', error);
        return false;
    }
}

// 添加新待办事项
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

// 删除待办事项
function deleteTodo(id) {
    const todos = readTodos();
    const filteredTodos = todos.filter(todo => todo.id !== parseInt(id));
    saveTodos(filteredTodos);
    return filteredTodos;
}

// 清空所有待办事项
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

