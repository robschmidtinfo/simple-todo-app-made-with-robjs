import { RobJS } from "./RobJS.js";
import { TodoView } from "./views/TodoView.js";

const app = new RobJS('myapp');
app.init('app')

// Mock data
const mockTodos = [
    { id: 1, title: 'Learn JavaScript', completed: false },
    { id: 2, title: 'Build a One Line of Code Frontend Framework', completed: false },
    { id: 3, title: 'Write a simple Todo App with it', completed: false },
];

// Define state variables 
app.defineStateVar('todos', mockTodos);

// Define views
app.defineView('todo', TodoView);

// Define routes
app.route('/todo', 'todo');

// Navigate to the Todo view initially
app.navigate('/todo');