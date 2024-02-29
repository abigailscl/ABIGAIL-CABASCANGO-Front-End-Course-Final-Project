import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { Label } from '../../atoms';
import { IBoxItemCart } from './type';

const BoxItemCart: React.FC<IBoxItemCart> = ({
  imageUrl,
  imageTitle,
  price,
}) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        borderBottom: '1px solid #ccc',
        padding: '8px 16px',
      }}
    >
      <Avatar alt="logo" src={imageUrl} />
      <Label text={imageTitle}></Label>
      <Typography variant="body2" color="text.secondary">
        {price}
      </Typography>
    </Box>
  );
};

export default BoxItemCart;
