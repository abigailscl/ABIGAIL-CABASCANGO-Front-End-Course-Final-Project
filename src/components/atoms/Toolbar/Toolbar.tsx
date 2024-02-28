import React from 'react';
import { IToolbar } from './types';
import { AppBar, Toolbar as MUIToolbar } from '@mui/material';

const Toolbar: React.FC<IToolbar> = ({ children, onClick }) => {
  return (
    <AppBar position="static">
      <MUIToolbar onClick={onClick}>{children}</MUIToolbar>
    </AppBar>
  );
};

export default Toolbar;
