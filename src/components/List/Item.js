import { FaArrowDown, FaArrowUp, FaRegCircle, FaRegTimesCircle, FaRegCheckCircle } from "react-icons/fa";

function Item(props) {
  const {task} = props
  const status = {
    "Pending": <FaRegCircle size={'3rem'} color="var(--orange)"/>,
    "Completed": <FaRegCheckCircle size={'3rem'} color="green"/>,
    "Cancelled": <FaRegTimesCircle size={'3rem'} color="red"/>,
  }
  return(
    <li className="item">
      <textarea value={task.text} onChange={(e)=>{console.log('e')}}></textarea>
      <div className="item-arrow-container">
        <div className="item-arrow border-bottom"><FaArrowUp/></div>
        <div className="item-arrow"><FaArrowDown/></div>
      </div>
      <div className="item-status">{status[task.status]}</div>
    </li>
  )
}
export {Item}