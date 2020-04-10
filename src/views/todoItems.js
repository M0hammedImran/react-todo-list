import React from 'react';
import PropTypes from 'prop-types';

const TodoItems = (props) => {
  const { todo } = props;
  return (
    <li
      key={props.key}
      className="mb-
    3"
    >
      <span>
        <input
          onChange={(event) => props.toggleTodoDone(event, props.index)}
          type="checkbox"
          checked={todo.done}
          id={todo.title}
          className="mr-2"
        />
        <label htmlFor={todo.title} className={todo.done ? 'done' : 'none'}>
          {' '}
          {todo.title}
        </label>
      </span>
      <a
        href="/"
        className="btn btn-info"
        onClick={(event) => props.removeTodo(event, props.index)}
      >
        Romove
      </a>
    </li>
  );
};

TodoItems.propTypes = {
  todo: PropTypes.any,
  key: PropTypes.any,
  index: PropTypes.any,
  toggleTodoDone: PropTypes.func,
  removeTodo: PropTypes.func,
};

export default TodoItems;
