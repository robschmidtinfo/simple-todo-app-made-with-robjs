import { TodoItem } from "../components/TodoItem.js";

export const TodoList = (id) => `
  <div id=${id}>
    ${app.state.todos.map((todo, index) => TodoItem(todo, index)).join('')}
  </div>
`;

