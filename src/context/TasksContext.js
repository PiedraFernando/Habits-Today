import {createContext, useState} from 'react';
const Tasks = [
  {text: 'Leer', date: '06/06/2023', status: 'Pending'},
  {text: 'Meditar', date: '06/06/2023', status: 'Pending'},
  {text: 'Correr', date: '06/06/2023', status: 'Pending'},
  {text: 'Ejercicio', date: '06/06/2023', status: 'Pending'},
];
const TaskContext = createContext();

function TaskProvider(props) {
  const [tasks, setTasks] = useState(Tasks);
  const addTask = () => {
    console.log(new Date().toLocaleDateString())
    setTasks([...tasks,{
      text:'',
      status:'Pending',
      date: new Date().toLocaleDateString()
    }])
  };
  return <TaskContext.Provider value={{tasks, setTasks, addTask}}>{props.children}</TaskContext.Provider>;
}

export {TaskContext, TaskProvider};
