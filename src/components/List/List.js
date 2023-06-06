import './List.css'
import { useContext } from "react"
import { TaskContext } from "../../context/TasksContext"
import { Item } from "./Item"

function List(){
  const {tasks} = useContext(TaskContext)
  return(
    <ul>
      {tasks.map((task)=>{
        return(<Item key={task.text} task={task}/>)
      })}
    </ul>
  )
}
export {List}