import React from 'react'

export default function List({tasks}) {
  return (
    
      <ul>
        {tasks.map(({ task, id }) => {
          return <li key={id}>{task}</li>;
        })}
      </ul>
  )
}
