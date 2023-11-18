import React, { useEffect, useState } from "react";
import List from "./List";

export default function TodoApp() {
  const [todoVal, setTodoVal] = useState("");
  const [tasks, setTasks] = useState([]);
  const [dynamicId, setdynamicId] = useState(0);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoVal) {
      setTasks([...tasks, { id: dynamicId, task: todoVal }]);
      setTodoVal("");
      setdynamicId(dynamicId + 1);
    }else{
      alert("Enter your Task Rahib")
    }
  }


  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem("todoList"));
    if (todoList) {
      setTasks(todoList);
      setdynamicId(todoList.length);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(tasks));
  }, [tasks]);
  

 




  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todoVal}
          onChange={(e) => setTodoVal(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <List tasks={tasks} />
    </>
  );
}
