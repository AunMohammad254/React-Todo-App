import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';
import Loader from '../components/Loader';
import SearchInput from '../components/SearchInput';
import TodoItem from '../components/TodoItem';
import TodoStats from '../components/TodoStats';
import ThemeToggle from '../components/ThemeToggle';
import StyledInput from '../components/StyledInput';
import StyledTextarea from '../components/StyledTextarea';
import { Plus, LogOut } from 'lucide-react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [newTodo, setNewTodo] = useState({ title: '', description: '' });
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await api.get('/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    } finally {
      setTimeout(() => setLoading(false), 800); // Show loader for minimum time
    }
  };

  const handleAddTodo = async (e) => {
    e.preventDefault();
    if (!newTodo.title.trim()) return;

    try {
      const response = await api.post('/todos', newTodo);
      setTodos([response.data, ...todos]);
      setNewTodo({ title: '', description: '' });
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const handleUpdateTodo = async (id, updates) => {
    try {
      const response = await api.put(`/todos/${id}`, updates);
      setTodos(todos.map(todo => todo._id === id ? response.data : todo));
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await api.delete(`/todos/${id}`);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const handleToggleTodo = async (id, completed) => {
    handleUpdateTodo(id, { completed });
  };

  const handleClearCompleted = async () => {
    try {
      await api.delete('/todos/completed/clear');
      setTodos(todos.filter(todo => !todo.completed));
    } catch (error) {
      console.error('Error clearing completed todos:', error);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const filteredTodos = todos.filter(todo => {
    const matchesSearch = todo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (todo.description || '').toLowerCase().includes(searchQuery.toLowerCase());
    
    if (filter === 'completed') return matchesSearch && todo.completed;
    if (filter === 'active') return matchesSearch && !todo.completed;
    return matchesSearch;
  });

  const completedCount = todos.filter(todo => todo.completed).length;

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="todo-app">
      <header className="app-header">
        <div className="header-content">
          <h1>📝 My Tasks</h1>
          <div className="header-actions">
            <span className="welcome-text">Welcome, {user?.username}!</span>
            <ThemeToggle />
            <button onClick={handleLogout} className="btn-logout">
              <LogOut size={18} /> Logout
            </button>
          </div>
        </div>
      </header>

      <main className="app-main">
        <div className="todo-container">
          <TodoStats total={todos.length} completed={completedCount} />

          <div className="add-todo-section">
            <form onSubmit={handleAddTodo} className="add-todo-form">
              <StyledInput
                type="text"
                value={newTodo.title}
                onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
                label="Task Title"
                placeholder="What needs to be done?"
              />
              <StyledTextarea
                value={newTodo.description}
                onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
                label="Description"
                placeholder="Add more details (optional)"
                rows="2"
              />
              <button type="submit" className="btn-add">
                <Plus size={20} /> Add Task
              </button>
            </form>
          </div>

          <SearchInput 
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search your tasks..."
          />

          <div className="filter-bar">
            <div className="filter-buttons">
              <button 
                className={filter === 'all' ? 'active' : ''} 
                onClick={() => setFilter('all')}
              >
                All ({todos.length})
              </button>
              <button 
                className={filter === 'active' ? 'active' : ''} 
                onClick={() => setFilter('active')}
              >
                Active ({todos.length - completedCount})
              </button>
              <button 
                className={filter === 'completed' ? 'active' : ''} 
                onClick={() => setFilter('completed')}
              >
                Completed ({completedCount})
              </button>
            </div>
            {completedCount > 0 && (
              <button onClick={handleClearCompleted} className="btn-clear">
                Clear Completed
              </button>
            )}
          </div>

          <div className="todos-list">
            {filteredTodos.length === 0 ? (
              <div className="empty-state">
                <p>
                  {searchQuery 
                    ? 'No tasks found matching your search' 
                    : filter === 'completed'
                    ? 'No completed tasks yet'
                    : filter === 'active'
                    ? 'No active tasks - great job! 🎉'
                    : 'No tasks yet. Add one to get started!'}
                </p>
              </div>
            ) : (
              filteredTodos.map(todo => (
                <TodoItem
                  key={todo._id}
                  todo={todo}
                  onUpdate={handleUpdateTodo}
                  onDelete={handleDeleteTodo}
                  onToggle={handleToggleTodo}
                />
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default TodoApp;