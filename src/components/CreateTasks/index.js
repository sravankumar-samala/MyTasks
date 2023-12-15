import {useState} from 'react'
import {v4 as uuid} from 'uuid'
import {useTasksContext} from '../../context/tasksContext'
import './index.css'

export default function CreateTasks() {
  const [task, setTask] = useState('')
  const [tag, setTag] = useState('health')
  const {tasks, setTasks} = useTasksContext()

  const changeTaskInputValue = e => setTask(e.target.value)

  const changeTagInputValue = e => setTag(e.target.value)

  const addNewTask = () => {
    const newTask = {
      id: uuid(),
      task,
      tag,
    }

    setTasks([...tasks, newTask])
    setTask('')
    setTag('health')
  }

  return (
    <div className="create-tasks-container">
      <h1>Create a task!</h1>
      <form className="form">
        <label htmlFor="task">Task</label>
        <input
          type="text"
          placeholder="Enter the task here"
          value={task}
          onChange={changeTaskInputValue}
        />
        <label htmlFor="Tags">Tags</label>
        <select value={tag} onChange={changeTagInputValue}>
          <option value="health">Health</option>
          <option value="education">Education</option>
          <option value="entertainment">Entertainment</option>
          <option value="sports">Sports</option>
          <option value="travel">Travel</option>
          <option value="other">Other</option>
        </select>
        <button type="button" className="add-task-btn" onClick={addNewTask}>
          Add Task
        </button>
      </form>
    </div>
  )
}
