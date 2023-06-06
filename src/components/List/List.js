import './List.css'
import { useContext } from "react"
import { TaskContext } from "../../context/TasksContext"
import { Item } from "./Item"

function List(){
  const {tasks} = useContext(TaskContext)
  return(
    <ul>
      {tasks.map((task, i)=>{
        return(<Item key={i+task.text} task={task} index={i}/>)
      })}
    </ul>
  )
}
export {List}