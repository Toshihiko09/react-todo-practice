import React from 'react';
import { ToDoAppList } from './applist';
import { AddNewTask } from './addtask';


export class Todo extends React.Component {
  constructor(props){
    super();
    this.state = {tasks: props.tasks};
    this.updateList = this.updateList.bind(this);
    this.removeTask = this.removeTask.bind(this);
    
  }

  updateList(text) {
    const updatedTasks = this.state.tasks;
    updatedTasks.push(text);
    this.setState({tasks: updatedTasks});
    this.updateLocalStrage(updatedTasks);
  }

  removeTask(text) {
    const updatedTasks = this.state.tasks;
    updatedTasks.splice(updatedTasks.indexOf(text), 1);
    this.setState({tasks: updatedTasks});
  }

  updateLocalStrage(updatedTasks){
    localStorage.setItem('storedTasks',JSON.stringify(updatedTasks));
  }

  render() {
      return (
          <div>
              <h1>Todo App</h1>
              <AddNewTask updateList={this.updateList} />
              <ToDoAppList tasks={this.state.tasks} remove={this.removeTask} />
          </div>
          );
  }
}