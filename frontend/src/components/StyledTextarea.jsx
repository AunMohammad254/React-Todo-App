import React from "react";

const StyledTextarea = ({
  id,
  name,
  value,
  onChange,
  placeholder,
  label,
  required = false,
  rows = 2,
  autoFocus = false,
  className = "",
  ...props
}) => {
  const textareaId =
    id || name || `textarea-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`styled-input-container ${className}`}>
      <div className="styled-input-wrapper">
        <span className="styled-input-accent" />
        <textarea
          id={textareaId}
          name={name}
          value={value}
          onChange={onChange}
          placeholder=" "
          required={required}
          rows={rows}
          autoFocus={autoFocus}
          className="styled-textarea"
          {...props}
        />
        <label htmlFor={textareaId} className="styled-input-label">
          {label || placeholder}
        </label>
      </div>
    </div>
  );
};

export default StyledTextarea;
