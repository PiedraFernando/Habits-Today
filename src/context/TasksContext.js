import { createContext, useState } from "react"
const Tasks = [
  {text:"Leer", date:"06/06/2023", status:'Pending'},
  {text:"Meditar", date:"06/06/2023", status:'Pending'},
  {text:"Correr", date:"06/06/2023", status:'Pending'},
  {text:"Ejercicio", date:"06/06/2023", status:'Pending'},
]
const TaskContext = createContext();

function TaskProvider(props){
  const [tasks, setTasks] = useState(Tasks)
  return (
    <TaskContext.Provider value={{tasks, setTasks}}>
      {props.children}
    </TaskContext.Provider>
  )
}

export {TaskContext, TaskProvider}