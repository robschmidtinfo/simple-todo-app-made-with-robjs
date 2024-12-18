export const TodoCreate = () => {

    const createTodo = () => {
        const input = document.getElementById('newTodo');
        if(input.value.trim()){
            app.updateState({
            todos: [
                ...app.state.todos,
                { id: Date.now(), title: input.value, completed: false },
            ],
            });
            input.value = ''; 
        }
    };
    
    return `
    <input class="form-control mb-1" id="newTodo" type="text" placeholder="Add a new todo" required/>
    <div class="d-grid mb-2">
        <button type="button" class="btn btn-secondary btn-outline btn-block" onclick="(${createTodo.toString()})()">Add Todo</button>
    </div>
`};