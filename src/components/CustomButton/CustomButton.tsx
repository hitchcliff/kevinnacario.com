import React from 'react';
import { Link } from 'react-router-dom';

enum Types {
  Submit = 'submit',
}

interface ButtonProps {
  submit?: boolean;
  handleClick?: (e: boolean) => void;
  link?: string;
  children: any;
}

export default function CustomButton({ submit, handleClick, children, link }: ButtonProps) {
  function onClick() {
    if (!handleClick) return;
    handleClick(true);
  }

  return (
    <button onClick={onClick} type={submit ? Types.Submit : undefined} className="block py-2 px-4 btn">
      {link ? <Link to={link}>{children}</Link> : children}
    </button>
  );
}
