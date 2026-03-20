import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <div className="todo-list">
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;