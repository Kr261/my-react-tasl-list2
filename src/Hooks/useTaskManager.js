import { useState, useEffect } from 'react';

const useTaskManager = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    const lastId = tasks.length > 0 ? tasks[tasks.length - 1].id : 0;

    const newTask = {
      id: lastId + 1,
      title,
      completed: false
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const updateTask = (taskId, updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, ...updatedTask } : task
      )
    );
  };

  return { tasks, addTask, deleteTask, updateTask };
};

export default useTaskManager;
