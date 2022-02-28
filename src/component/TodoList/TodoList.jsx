import React, { useState } from "react";
import Todo from "./Todo";
function TodoList({ toDoList, handleFilter, handleToggle }) {
  return (
    <div>
      {toDoList.map((todo) => {
        return (
          <Todo
            todo={todo}
            handleToggle={handleToggle}
            handleFilter={handleFilter}
          />
        );
      })}
      <button
        style={{ marginLeft: "100px", color: "#ef4638" }}
        onClick={handleFilter}
      >
        Clear
      </button>
    </div>
  );
}

export default TodoList;
