import React, { useState } from 'react';
import { Check, Trash2, Edit2, X } from 'lucide-react';
import StyledInput from './StyledInput';
import StyledTextarea from './StyledTextarea';

const TodoItem = ({ todo, onUpdate, onDelete, onToggle }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editDescription, setEditDescription] = useState(todo.description || '');

  const handleUpdate = () => {
    if (editTitle.trim()) {
      onUpdate(todo._id, { title: editTitle, description: editDescription });
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditTitle(todo.title);
    setEditDescription(todo.description || '');
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="todo-item editing">
        <StyledInput
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          placeholder="Task title..."
          autoFocus
        />
        <StyledTextarea
          value={editDescription}
          onChange={(e) => setEditDescription(e.target.value)}
          placeholder="Description (optional)..."
          rows="2"
        />
        <div className="edit-actions">
          <button onClick={handleUpdate} className="btn-save">
            <Check size={16} /> Save
          </button>
          <button onClick={handleCancel} className="btn-cancel">
            <X size={16} /> Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo._id, !todo.completed)}
          className="todo-checkbox"
        />
        <div className="todo-text">
          <h3>{todo.title}</h3>
          {todo.description && <p>{todo.description}</p>}
        </div>
      </div>
      <div className="todo-actions">
        <button onClick={() => setIsEditing(true)} className="btn-edit">
          <Edit2 size={18} />
        </button>
        <button onClick={() => onDelete(todo._id)} className="btn-delete">
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;