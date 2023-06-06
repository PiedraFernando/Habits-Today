import {useContext, useState} from 'react';
import {FaArrowDown, FaArrowUp, FaRegCircle, FaRegTimesCircle, FaRegCheckCircle, FaTimes} from 'react-icons/fa';
import {TaskContext} from '../../context/TasksContext';

function Item(props) {
  const {task} = props;
  const [text, setText] = useState(task.text);
  const status = {
    Pending: <FaRegCircle size={'3rem'} color="var(--orange)" />,
    Completed: <FaRegCheckCircle size={'3rem'} color="green" />,
    Cancelled: <FaRegTimesCircle size={'3rem'} color="red" />,
  };
  const {changeStatus, swapTask, updateText, deleteTask} = useContext(TaskContext);
  return (
    <li className="item">
      <div className="item-delete" onClick={()=>{deleteTask(text)}}>
        <FaTimes size={'1.5rem'} color="red"/>
      </div>
      <textarea
        value={text}
        onBlur={(e) => {
          updateText(props.index, text);
        }}
        onChange={(e) => {
          setText(e.target.value);
        }}></textarea>
      <div className="item-arrow-container">
        <div
          className="item-arrow border-bottom"
          onClick={() => {
            swapTask(props.index, -1);
          }}>
          <FaArrowUp />
        </div>
        <div
          className="item-arrow"
          onClick={() => {
            swapTask(props.index, 1);
          }}>
          <FaArrowDown />
        </div>
      </div>
      <div
        className="item-status"
        onClick={() => {
          changeStatus(text);
        }}>
        {status[task.status]}
      </div>
    </li>
  );
}
export {Item};
