
import './App.css';
import { React } from 'react';
import { Provider } from 'react-redux';
import store2 from './reducer/store_counter';
import ContactForm from './Components/ContactForm';
import Post from './Components/Post';
import Counter from './Components/Counter';
import { createStore } from 'redux';
import storetodo from './reducer/store_todolist'
import TodoList from './Components/TodoList';
import todosReducer from './reducer/store_todolist';

// function App() {
//   return (
//     <Provider store={store} >
//       <Counter />
//     </Provider>
//   );
// }
const store = createStore(todosReducer);


function ToDO() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todo List</h1>
        <TodoList />
      </div>
    </Provider>
  );
}

export default ToDO;


