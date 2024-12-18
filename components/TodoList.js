import { TodoItem } from "../components/TodoItem.js";

export const TodoList = () => `
  <div>
      ${app.state.todos.map((todo, index) => TodoItem(todo, index)).join('')}
  </div>
`;