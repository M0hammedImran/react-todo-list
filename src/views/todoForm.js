/* eslint-disable react/prop-types */
import React from 'react';

const TodoForm = (props) => {
  return (
    <form onSubmit={(event) => props.formSubmitted(event)}>
      <div className="form-group form mb-4 mx-auto">
        <label htmlFor="todo">Enter Todo: </label>

        <input
          required
          type="text"
          id="todo"
          name="todo"
          className="form-control mb-2"
          onChange={props.newTodoChanged}
          value={props.newTodo}
        />
        <button type="submit" className="btn btn-primary ml-1">
          Submit
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
