import React from "react";
import "./index.css";

const MyInput = ({
  title,
  placeholder,
  type,
  textArea,
  maxLength,
  rows,
  errorLabel,
  register,
  actualLength,
}) => {
  return (
    <div className="input-container">
      <label className="input-label">{title}</label>
      {textArea ? (
        <textarea
          className="input textarea"
          {...{ placeholder, title, type, maxLength, rows }}
          {...register}
        />
      ) : (
        <input
          className="input"
          {...register}
          {...{ placeholder, title, type }}
        />
      )}
      {maxLength && (
        <label className="input-label">
          {actualLength}/{maxLength}
        </label>
      )}
      <label className="input-label error">{errorLabel}</label>
    </div>
  );
};

export default MyInput;
