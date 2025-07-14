import React from 'react'

const Button = ({onClickListener, text}) => {
  return (
    <button onClick={onClickListener}>
      {text}
    </button>
  );
}

export default Button