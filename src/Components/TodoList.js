import React from 'react';
import { connect } from 'react-redux';

function TodoList({ todos, newTodo, dispatch }) {
    function handleSubmit(e) {
        e.preventDefault();
        dispatch({ type: 'ADD_TODO', payload: newTodo });
        dispatch({ type: 'SET_NEW_TODO', payload: '' });
    }

    function handleDelete(index) {
        dispatch({ type: 'DELETE_TODO', payload: index });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    value={newTodo}
                    onChange={(e) => dispatch({ type: 'SET_NEW_TODO', payload: e.target.value })}
                />
                <button type="submit">Add</button>
            </form>
            <div>
                <h2>List of items</h2>
            </div>
            <ul>
                {todos && todos.length > 0 ? (
                    todos.map((todo, index) => (
                        <li key={index}>
                            {todo}
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </li>
                    ))
                ) : (
                    <li>No items</li>
                )}
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => ({
    todos: state.todos,
    newTodo: state.newTodo,
});

export default connect(mapStateToProps)(TodoList);
