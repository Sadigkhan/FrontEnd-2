import React from "react";

export default function List({ tasks }) {
  return (
    <ul>
      {tasks.map(({ title, id }) => {
        return <li key={id}>{title}</li>;
      })}
    </ul>
  );
}
