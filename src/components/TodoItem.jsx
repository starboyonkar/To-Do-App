import React from "react";

const TodoItem = ({ task, toggleTask, deleteTask }) => {
  return (
    <div className={`todo-item ${task.isCompleted ? "completed" : ""}`}>
      <span onClick={() => toggleTask(task.id)}>
        {task.name}
      </span>

      <div className="actions">
        <button onClick={() => toggleTask(task.id)}>
          {task.isCompleted ? "Completed" : "in Progress"}
        </button>
        <button className="delete" onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;