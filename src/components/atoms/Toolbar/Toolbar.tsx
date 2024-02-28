import React from 'react';
import { IToolbar } from './types';
import { Toolbar as MUIToolbar } from '@mui/material';

const Toolbar: React.FC<IToolbar> = ({
  children,
  variant = 'regular',
  style,
  onClick,
}) => {
  return (
    <MUIToolbar variant={variant} sx={style} onClick={onClick}>
      {children}
    </MUIToolbar>
  );
};

export default Toolbar;
