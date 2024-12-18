import { TodoCreate } from "../components/TodoCreate.js";
import { TodoList } from "../components/TodoList.js";

export const TodoView = () =>  `
    <div class="container">
        <div class="mt-4 p-5 bg-primary text-white text-center rounded mb-5">
            <h1>Simple Todo App</h1>
            <p>Made with RobJS</p>
        </div>
        ${TodoCreate()}
        ${TodoList()}
    </div>
`;