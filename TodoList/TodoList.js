import React, { useState } from 'react'

const DEFAULT_TASKS = [
  {id: 1, text: 'one'},
  {id: 2, text: 'two'},
]

let id = 3

export default function App() {
  const [tasks, setTasks] = useState(DEFAULT_TASKS)
  const [input, setInput] = useState('')

  const onChange = (e) => {
    setInput(e.currentTarget.value)
  }

  const onSubmit = () => {
    if(!input) return
    setTasks((tasks) => [...tasks, {id: id++, text: input}])
    setInput('')
  }

  const onDelete = (e) => {
    const taskId = e.currentTarget.getAttribute('aria-id')
    const filtered = tasks.filter(({ id }) => id !== Number(taskId))
    setTasks(filtered)
  }
  
  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" placeholder="Add your task" value={input} onChange={onChange} />
      <button onClick={onSubmit}>Submit</button>

      <ul>
        {tasks.map(({id, text}) => (
          <li key={id}>
            <div>{text}</div>
            <button aria-id={id} onClick={onDelete}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
