import { useState } from 'react';
import './App.css';
import Header from "./Components/header"
import Task from './Components/task';
import TaskList from './Components/TaskList';

function App() {

  const [task, setTask] = useState ([ 
    {
      id: 1,
      tittle: "Be Gratefull",
      completed: false,
    },
    {
      id: 2,
      tittle: "Go to the gym",
      completed: false,
    },
    {
      id: 1,
      tittle: "Take a Shower",
      completed: true,
    },
    {
      id: 1,
      tittle: "Study react fot 3 hours",
      completed: false,
    }
  ])
  return (
    <div className="bg-img min-h-screen h-full font-poppins flex items-center justify-center py-20 px-5 text-purple-900">
      <div className="bg-purple-200 container rounded-lg flex-col max-w-x justify-centerl text-center px-10 py-4"> 
      <Header/>
      <TaskList task = {task} />
      </div>
    </div>
  );
}

export default App;
