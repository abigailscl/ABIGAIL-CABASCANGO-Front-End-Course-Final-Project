import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContentPicture from '../../molecules/CardContent/CardContent';
import CardActionsPicture from '../../molecules/CardActions/CardActions';
import { ICardPictureProps } from './types';

const CardPicture: React.FC<ICardPictureProps> = ({
  title,
  description,
  imageUrl,
  price,
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={imageUrl} component="img" />
      <CardContentPicture title={title} description={description} />
      <CardActionsPicture
        labelText="Price"
        buttonText="Add to cart"
        priceText={price}
      />
    </Card>
  );
};

export default CardPicture;
