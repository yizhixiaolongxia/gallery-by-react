import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import TodoList from './components/newTodoList'
import { Provider } from 'react-redux'
import store from './store'

const App = (
    <Provider store={store}>
        <TodoList />
    </Provider>
)

ReactDOM.render(App, document.getElementById('root'));
