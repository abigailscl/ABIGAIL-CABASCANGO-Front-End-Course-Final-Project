import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { IButtonProps } from './types';

const Button: React.FC<IButtonProps> = ({
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  icon,
  iconPosition,
  text,
  onClick,
}) => {
  return (
    <MuiButton
      variant={variant}
      color={color}
      size={size}
      startIcon={iconPosition === 'left' ? <>{icon}</> : null}
      endIcon={iconPosition === 'right' ? <>{icon}</> : null}
      onClick={onClick}
      disableElevation
    >
      {text}
    </MuiButton>
  );
};

export default Button;
