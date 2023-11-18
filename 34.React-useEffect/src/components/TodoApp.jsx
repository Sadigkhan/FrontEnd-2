import React, { useEffect, useState } from "react";
import List from "./List";

export default function TodoApp() {
  const [todoVal, setTodoVal] = useState("");
  const [tasks, setTasks] = useState([]);
  const [dynamicId, setdynamicId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, { title: todoVal, id: dynamicId }]);
    setdynamicId(dynamicId + 1);
    setTodoVal("");
  };

  useEffect(() => {
    let localData = JSON.parse(localStorage.getItem("tasks"));
    if (localData) {
      setTasks(localData);
      let ltsId = localData[localData.length - 1].id;
      setdynamicId(ltsId + 1);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
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
