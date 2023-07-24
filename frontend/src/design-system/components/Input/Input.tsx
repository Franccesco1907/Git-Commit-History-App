import React, { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ ...rest }) => {
  return (
    <input
      className="rounded-md border border-gray-300 px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
      {...rest}
    />
  );
};

export default Input;
