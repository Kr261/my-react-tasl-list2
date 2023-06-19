import { useEffect } from 'react';
import './App.css';
import Header from "./Components/header"
import TaskList from './Components/TaskList';
import TaskInput from './Components/TaskInput';
import useTaskManager from './Hooks/useTaskManager';

function App() {
  const { tasks, addTask, deleteTask, updateTask } = useTaskManager();

  useEffect(() => {
    // Aquí puedes hacer otras cosas relacionadas con App si es necesario
  }, []);

  return (
    <div className="bg-img min-h-screen h-full font-poppins flex items-center justify-center py-20 px-5 text-purple-900">
      <div className="bg-purple-200 container rounded-lg flex-col max-w-x justify-centerl text-center px-10 py-4"> 
        <Header />
        <TaskInput addTask={addTask} />
        <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
      </div>
    </div>
  );
}

export default App;
