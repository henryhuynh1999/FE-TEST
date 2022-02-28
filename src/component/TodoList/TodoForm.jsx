import React, { useState } from "react";
import "./TodoList.css";

function TodoForm({ addTask }) {
  const [userInput, setUserInput] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
    setUserInput(e.currentTarget.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={userInput}
        placeholder="Search"
        className="todo-input"
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
}

export default TodoForm;
