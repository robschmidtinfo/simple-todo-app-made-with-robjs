import { TodoForm } from "../components/TodoForm.js"
import { TodoList } from "../components/TodoList.js"

export const TodoApp = () =>  `
    <div>
        ${TodoForm()}
        ${TodoList('todolist1')}
    </div>
`;