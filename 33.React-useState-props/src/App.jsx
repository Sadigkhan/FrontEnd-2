import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [tasks, setTasks] = useState([]);
  const [count, setCount] = useState(0);
  const submitHandler = (e) => {
    e.preventDefault();
    setTasks([...tasks, { title: todo, id: count }]);
    setTodo("")
  };
  return (
    <>
      <h1>Todo</h1>
      <div className="card">
        <form
          onSubmit={(e) => {
            submitHandler(e);
            setCount((count) => count + 1);
          }}
        >
          <input
            type="text"
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
          <button type="submit">Add</button>
        </form>
        <ul>
          {tasks.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
