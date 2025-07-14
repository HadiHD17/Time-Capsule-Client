import React from 'react'

const Input = ({type, name, hint, className, required, onChangeListener}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={hint}
      className={className}
      required={required}
      onChange={onChangeListener}
    />
  );
};

export default Input