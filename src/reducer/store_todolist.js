const initialState = {
    todos: [],
    newTodo: '',
};

function todosReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter((_, i) => i !== action.payload),
            };
        case 'SET_NEW_TODO':
            return {
                ...state,
                newTodo: action.payload,
            };
        default:
            return state;
    }
}

export default todosReducer;
