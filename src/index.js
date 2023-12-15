import React from 'react'
import ReactDOM from 'react-dom'
import {TasksContextProvider} from './context/tasksContext'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <TasksContextProvider>
      <App />
    </TasksContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
