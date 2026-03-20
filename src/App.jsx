import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  

  // Load tasks from localStorage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add Task
  const addTask = (taskName) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  };

  // Toggle Task
  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, isCompleted: !task.isCompleted }
        : task
    );
    setTasks(updatedTasks);
  };

  // Delete Task
  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <div className="app-container">
      <h1>To-Do App</h1>
      <TodoForm addTask={addTask} />
      <TodoList
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default App;