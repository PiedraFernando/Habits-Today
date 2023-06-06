import {createContext, useEffect} from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import * as dayjs from 'dayjs'
// const Tasks = [
//   {text: 'Leer', date: '06/06/2023', status: 'Pending'},
//   {text: 'Meditar', date: '06/06/2023', status: 'Pending'},
//   {text: 'Correr', date: '06/06/2023', status: 'Pending'},
//   {text: 'Ejercicio', date: '06/06/2023', status: 'Pending'},
// ];
const TaskContext = createContext();

function TaskProvider(props) {
  const {item: tasks, saveItem: setTasks, loading} = useLocalStorage('TASKS_V1', []);
  useEffect(() => {
    if ((loading === false)) {
      const newTasks = tasks.map((task) => {
        const date = dayjs(task.date)
        const days = dayjs().diff(date, 'days');
        if (days > 0) {
          task.status = 'Pending'
          task.date = new Date().toLocaleDateString()
        }
        return task;
      });
      setTasks(newTasks)
    }
    // eslint-disable-next-line
  }, [loading]);
  const addTask = () => {
    setTasks([
      ...tasks,
      {
        text: '',
        status: 'Pending',
        date: new Date().toLocaleDateString(),
      },
    ]);
  };
  const changeStatus = (text) => {
    const newTasks = tasks.map((task) => {
      if (text === task.text) {
        let newTask;
        if (task.status === 'Pending') {
          newTask = {...task, status: 'Completed'};
        }
        if (task.status === 'Completed') {
          newTask = {...task, status: 'Cancelled'};
        }
        if (task.status === 'Cancelled') {
          newTask = {...task, status: 'Pending'};
        }
        return newTask;
      }
      return task;
    });
    setTasks(newTasks);
  };
  const swapTask = (index, direction) => {
    if (index+direction>=0 && index+direction<tasks.length) {
      let newTasks = [...tasks];
      const awaitTask = newTasks[index + direction];
      newTasks[index + direction] = newTasks[index];
      newTasks[index] = awaitTask;
      setTasks(newTasks);
    }
  };
  const updateText = (index,newText) => {
    let newTasks = [...tasks];
    newTasks[index].text = newText;
    setTasks(newTasks)
  }
  const deleteTask = (text) => {
    const newTasks = tasks.filter((task) => task.text !== text);
    setTasks(newTasks)
  }
  return <TaskContext.Provider value={{tasks, setTasks, addTask, changeStatus, swapTask, updateText, deleteTask}}>{props.children}</TaskContext.Provider>;
}

export {TaskContext, TaskProvider};
