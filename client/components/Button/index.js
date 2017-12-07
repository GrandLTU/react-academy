import React from 'react';

const Button = ({ title, click, className, disabled = false }) => {
  return (
    <button disabled={disabled} className={className} onClick={click}>{title}</button>
  );
};

export default Button;
