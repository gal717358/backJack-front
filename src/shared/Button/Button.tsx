import React, { FC } from 'react';
import useStyles from './useStyles';

interface ButtonProps {
  label: string;
  onClick: () => void;
  customStyle?: string;
}
const Button: FC<ButtonProps> = ({ label, onClick, customStyle }) => {
  const classes = useStyles();
  return (
    <button
      type='button'
      onClick={onClick}
      className={`${classes.root} ${customStyle}`}
    >
      {label}
    </button>
  );
};

export default Button;
