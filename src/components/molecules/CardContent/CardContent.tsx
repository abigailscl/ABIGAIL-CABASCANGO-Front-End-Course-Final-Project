import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Label from '../../atoms/Label/Label';
import Typography from '@mui/material/Typography';
import { ICardContentProps } from './types';

const CardContentPicture: React.FC<ICardContentProps> = ({
  title,
  description,
}) => {
  return (
    <CardContent>
      <Label text={title} />
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
  );
};

export default CardContentPicture;
