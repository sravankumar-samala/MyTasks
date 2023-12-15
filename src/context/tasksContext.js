import {useState, useContext, createContext} from 'react'

const TasksContext = createContext()

const TasksContextProvider = ({children}) => {
  const [tasks, setTasks] = useState([])

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}

function useTasksContext() {
  const context = useContext(TasksContext)
  if (context === undefined) {
    throw new Error('Context was used outside the Context Provider.')
  }
  return context
}

// export custom context hook and context provider
export {useTasksContext, TasksContextProvider}
