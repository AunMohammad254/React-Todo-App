import React from 'react';

const StyledInput = ({ 
  type = "text", 
  id, 
  name,
  value, 
  onChange, 
  placeholder, 
  label,
  required = false,
  minLength,
  autoFocus = false,
  className = "",
  ...props 
}) => {
  const inputId = id || name || `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`styled-input-container ${className}`}>
      <div className="styled-input-wrapper">
        <span className="styled-input-accent" />
        <input 
          type={type}
          id={inputId}
          name={name}
          value={value}
          onChange={onChange}
          placeholder=" "
          required={required}
          minLength={minLength}
          autoFocus={autoFocus}
          className="styled-input"
          {...props}
        />
        <label 
          htmlFor={inputId} 
          className="styled-input-label"
        >
          {label || placeholder}
        </label>
      </div>
    </div>
  );
};

export default StyledInput;