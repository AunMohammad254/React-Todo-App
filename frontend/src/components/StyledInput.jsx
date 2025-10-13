import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

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
  isPassword = false,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  const inputId =
    id || name || `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`styled-input-container ${className}`}>
      <div className="styled-input-wrapper">
        <span className="styled-input-accent" />
        <input
          type={inputType}
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
        <label htmlFor={inputId} className="styled-input-label">
          {label || placeholder}
        </label>
        {isPassword && (
          <span
            className="password-toggle-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
        )}
      </div>
    </div>
  );
};

export default StyledInput;
