import {useState} from 'react'
import {useTasksContext} from '../../context/tasksContext'
import './index.css'

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

export default function Tasks() {
  const [activeTag, setActiveTag] = useState('')
  const {tasks} = useTasksContext()

  const newTasksList = activeTag
    ? tasks.filter(each => each.tag.toUpperCase() === activeTag)
    : tasks

  return (
    <div className="tasks-and-tags-container">
      <div className="tags-list-wrapper">
        <h2>Tags</h2>
        <ul className="tags-list">
          {tagsList.map(each => (
            <li
              key={each.optionId}
              onClick={() => setActiveTag(each.optionId)}
              className={`tag-item ${
                activeTag === each.optionId ? 'active-tag-item' : ''
              }`}
            >
              {each.displayText}
            </li>
          ))}
        </ul>
      </div>
      <div className="tasks-list-wrapper">
        <h2>Tasks</h2>
        <ul className="tasks-list">
          {newTasksList.map(each => (
            <li key={each.id} className="task-item">
              <p>{each.task}</p>
              <p>{each.tag}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
