import React from 'react';
import { Box, Typography } from '@mui/material';
import { ILabelProps } from './types';

const Label: React.FC<ILabelProps> = ({ text }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Typography sx={{ width: '100%' }} variant="h6" fontSize={18}>
        {text}
      </Typography>
    </Box>
  );
};

export default Label;
