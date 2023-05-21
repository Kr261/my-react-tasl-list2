import { useEffect, useState } from 'react';
import './App.css';
import Header from "./Components/header"
import Task from './Components/task';
import TaskList from './Components/TaskList';
import TaskInput from './Components/TaskInput';

function App() {

  const [task, setTask] = useState([ ])

  const addTask = (tittle) => {
    const lastId = task.length > 0 ? task[task.length - 1].id : 1;

    const newTask = {
      id: lastId + 1,
      tittle,
      completed: false
    }

    const taskList = [...task]
    taskList.push(newTask);
    setTask(taskList);

  };

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTask(JSON.parse(savedTasks));
    }
    }, []);
 
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(task));
  }, [task]);

  return (
    <div className="bg-img min-h-screen h-full font-poppins flex items-center justify-center py-20 px-5 text-purple-900">
      <div className="bg-purple-200 container rounded-lg flex-col max-w-x justify-centerl text-center px-10 py-4"> 
      <Header/>
      <TaskInput addTask={addTask} />
      <TaskList task = {task} />
      </div>
    </div>
  );

  }

export default App;
