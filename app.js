import { RobJSApp } from "./Rob.js"
import { create } from "./components/TodoForm.js"
import { handleDelete, handleToggleComplete } from "./components/TodoItem.js"
import { TodoList } from "./components/TodoList.js"
import { TodoApp } from "./views/TodoApp.js"

const app = new RobJSApp('myapp')
app.init('app')

// Mock data
const mockTodos = [
    { id: 1, title: 'Learn JavaScript', completed: false },
    { id: 2, title: 'Learn The RobJS Framework', completed: false },
    { id: 3, title: 'Write a simple Todo App with it', completed: false },
];

// Define state variables 
app.defineStateVar('todos', mockTodos)

// Register the create function for the TodoForm component
app.TodoForm = {}
app.TodoForm.create = create

// Register functions for the TodoItem component
app.TodoItem = {}
app.TodoItem.handleDelete = handleDelete
app.TodoItem.handleToggleComplete = handleToggleComplete

// Register TodoList component
app.registerComponent(TodoList, 'todolist1', ['todos'])

app.initialRender(TodoApp)