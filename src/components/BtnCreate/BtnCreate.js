import { useContext } from 'react';
import { TaskContext } from '../../context/TasksContext';
import './BtnCreate.css';
import {FaPlusCircle} from 'react-icons/fa';

function BtnCreate() {
  const {addTask} = useContext(TaskContext)
  return (
    <button className='btnCreate' onClick={addTask}>
      <FaPlusCircle size={'2.5rem'} color='var(--orange)' />
    </button>
  );
}
export {BtnCreate};
