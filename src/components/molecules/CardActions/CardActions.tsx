import * as React from 'react';
import Label from '../../atoms/Label/Label';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import { Box } from '@mui/material';
import Button from '../../atoms/Button/Button';
import { ICardActionsProps } from './types';

const CardActionsPicture: React.FC<ICardActionsProps> = ({
  labelText,
  priceText,
  buttonText,
}) => {
  return (
    <CardActions>
      <Label text={labelText} />
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="body2" color="text.secondary">
          {priceText}
        </Typography>
      </Box>
      <Box justifyContent="flex-end">
        <Button color="inherit" fontColor="inherit" text={buttonText} />
      </Box>
    </CardActions>
  );
};

export default CardActionsPicture;
