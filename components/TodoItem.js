export const handleDelete = (i) => {
  app.updateState('todos', app.state.todos.filter((_, idx) => idx !== i))
};

export const handleToggleComplete = (i) => {
  app.updateState('todos', app.state.todos.map((t, idx) => idx === i ? { ...t, completed: !t.completed } : t))
};

export const TodoItem = (todo, index) => {
  
    return `
      <div class="card bg-light text-dark mb-1">
        <div class="card-body d-flex justify-content-between align-items-center">
            <span style="text-decoration: ${todo.completed ? 'line-through' : 'none'}">${todo.title}</span>
            <div class="btn-group">
                <button class="btn btn-danger btn-outline" onclick="app.TodoItem.handleDelete(${index})">Delete</button>
                <button class="btn btn-success btn-outline" onclick="app.TodoItem.handleToggleComplete(${index})">
                    ${todo.completed ? 'Undo' : 'Complete'}
                </button>
            </div>
        </div>
    </div>
    `;
  };