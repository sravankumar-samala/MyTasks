import {useState} from 'react'
import {v4 as uuid} from 'uuid'
// import CreateTasks from './components/CreateTasks'
// import Tasks from './components/Tasks'
import './App.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

const App = () => {
  const [tasks, setTasks] = useState([])

  const [task, setTask] = useState('')
  const [tag, setTag] = useState(tagsList[0].optionId)

  const [activeTag, setActiveTag] = useState('')

  const changeTaskInputValue = e => setTask(e.target.value)

  const changeTagInputValue = e => setTag(e.target.value)

  const toggleActiveTag = tagId => {
    if (activeTag === tagId) {
      setActiveTag('')
    } else setActiveTag(tagId)
  }

  const addNewTask = e => {
    e.preventDefault()
    const newTask = {
      id: uuid(),
      task,
      tag,
    }

    setTasks([...tasks, newTask])
    setTask('')
    setTag(tagsList[0].optionId)
  }

  const newTasksList = activeTag
    ? tasks.filter(each => each.tag === activeTag)
    : tasks

  return (
    <div className="main-container">
      {/* <CreateTasks /> */}
      <div className="create-tasks-container">
        <h1>Create a task!</h1>
        <form className="form" onSubmit={addNewTask}>
          <label htmlFor="Task">Task</label>
          <input
            type="text"
            id="Task"
            placeholder="Enter the task here"
            value={task}
            onChange={changeTaskInputValue}
            required
          />
          <label htmlFor="Tags">Tags</label>
          <select value={tag} onChange={changeTagInputValue} id="Tags">
            {tagsList.map(eachTag => (
              <option key={eachTag.optionId} value={eachTag.optionId}>
                {eachTag.displayText}
              </option>
            ))}
          </select>
          <button type="submit" className="add-task-btn">
            Add Task
          </button>
        </form>
      </div>
      {/* <Tasks /> */}
      <div className="tasks-and-tags-container">
        <div className="tags-list-wrapper">
          <h2>Tags</h2>
          <ul className="tags-list">
            {tagsList.map(each => (
              <li
                key={each.optionId}
                onClick={() => toggleActiveTag(each.optionId)}
                className={`tag-item ${
                  each.optionId === activeTag.toUpperCase()
                    ? 'active-tag-item'
                    : ''
                }`}
              >
                <button type="button">{each.displayText}</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="tasks-list-wrapper">
          <h2>Tasks</h2>

          {newTasksList.length === 0 ? (
            <div className="no-tasks-view">
              <p> No Tasks Added Yet</p>
            </div>
          ) : (
            <ul className="tasks-list">
              {newTasksList.map(each => {
                const capitalizedTagName =
                  each.tag.charAt(0) + each.tag.slice(1).toLowerCase()

                return (
                  <li key={each.id} className="task-item">
                    <p>{each.task}</p>
                    <p className="task-tag-text">{capitalizedTagName}</p>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
