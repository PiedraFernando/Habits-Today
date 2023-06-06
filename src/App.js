import './App.css';
import {Header} from './components/Header/Header';
import {List} from './components/List/List';
import {TaskProvider} from './context/TasksContext';

function App() {
  return (
    <TaskProvider>
      <UI></UI>
    </TaskProvider>
  );
}

function UI() {
  return (
    <>
      <div className="App">
        <Header title="Habits Today" />
        <List/>
      </div>
    </>
  );
}

export default App;
