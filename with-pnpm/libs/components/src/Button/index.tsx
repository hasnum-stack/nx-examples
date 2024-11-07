import React from 'react';
import './button.css';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  children,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'demo-button--primary' : 'demo-button--secondary';
  return (
    <button
      type="button"
      className={['demo-button', `demo-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      123{children}
    </button>
  );
};
