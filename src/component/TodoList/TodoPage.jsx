import { useState } from "react";
import Breadcrumbs from "../Home/Breadcrumbs";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import icon from "../../Image/arrow-black.png";
import { useNavigate } from "react-router-dom";
function TodoPage() {
  const navigate = useNavigate();
  const taskOfList = [
    {
      id: 1,
      task: "Clean room",
      complete: true,
    },
    {
      id: 2,
      task: "Clean room",
      complete: true,
    },
    {
      id: 3,
      task: "Clean room",
      complete: true,
    },
    {
      id: 4,
      task: "Clean room",
      complete: false,
    },
    {
      id: 5,
      task: "Clean room",
      complete: false,
    },
    {
      id: 6,
      task: "Clean room",
      complete: false,
    },
  ];
  const [toDoList, setToDoList] = useState(taskOfList);
  console.log(toDoList);
  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === Number(id)
        ? {
            ...task,
            complete: !task.complete,
          }
        : { ...task };
    });
    setToDoList(mapped);
  };

  const handleFilter = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete;
    });
    setToDoList(filtered);
  };
  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [
      ...copy,
      { id: toDoList.length + 1, task: userInput, complete: false },
    ];
    setToDoList(copy);
  };
  return (
    <div>
      <Breadcrumbs
        handleClick={() => navigate(-1)}
        icon={icon}
        page="Todo list"
      />
      <TodoForm addTask={addTask}></TodoForm>
      <div>
        There are{" "}
        <span style={{ color: "#ef4638" }}>
          {toDoList.filter((e) => e.complete == true).length}
        </span>{" "}
        tasks left out of {toDoList.length} tasks
      </div>
      <TodoList
        toDoList={toDoList}
        handleToggle={handleToggle}
        handleFilter={handleFilter}
      ></TodoList>
    </div>
  );
}

export default TodoPage;
