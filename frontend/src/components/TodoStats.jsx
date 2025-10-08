import React from "react";
import { CheckCircle, Circle } from "lucide-react";

const TodoStats = ({ total, completed }) => {
  return (
    <div className="todo-stats">
      <div className="stat-item">
        <Circle size={20} />
        <span>{total - completed} Current Missions to Complete</span>
      </div>
      <div className="stat-item completed">
        <CheckCircle size={20} />
        <span>{completed} Completed</span>
      </div>
    </div>
  );
};

export default TodoStats;
