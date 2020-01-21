import React from 'react';
import ReactDOM from 'react-dom';
import { Todo } from './components/main';
import * as serviceWorker from './serviceWorker';

var taskList = ["Task 1", "Task 2", "Task 3"];

const localTasks = localStorage.getItem('storedTasks');

if(localTasks){
  taskList = JSON.parse(localTasks);
}

ReactDOM.render(<Todo tasks={taskList} />, document.getElementById('todo'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
