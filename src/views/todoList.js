import React from 'react';
import TodoItems from './todoItems';

const TodoList = (props) => {
  return (
    <ol>
      <h3>List</h3>
      {props.todos.map((todo, index) => {
        return (
          <TodoItems
            key={index}
            todo={todo}
            index={index}
            toggleTodoDone={props.toggleTodoDone}
            removeTodo={props.removeTodo}
          />
        );
      })}
    </ol>
  );
};

export default TodoList;
