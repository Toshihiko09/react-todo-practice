import React, { Component } from 'react';

export class ToDoAppList extends Component {
  constructor(){
    super();
    this.remove = this.remove.bind(this);
  }

  remove(item){
    const value = item.target.parentNode.querySelector('span').innerText;
    this.props.remove(value);
  }

  render(){
      const items = this.props.tasks.map((item,i) => {
        return <li key={i}><span>{item}</span><button onClick={this.remove}>Remove</button></li>
      });
      return(
        <ul>
          {items}
        </ul>
      )
  }
}