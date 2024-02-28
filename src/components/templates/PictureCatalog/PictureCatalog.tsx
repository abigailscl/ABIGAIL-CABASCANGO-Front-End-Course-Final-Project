import * as React from 'react';
import CardPicture from '../../organisms/CardPicture/CardPicture';
import { Box, Grid } from '@mui/material';
import { IPicture } from '../../../models';
import { IPictureCatalogProps } from './types';

const PictureCatalog: React.FC<IPictureCatalogProps> = ({ pictures }) => {
  return (
    <Box>
      <Grid container spacing={2}>
        {pictures.map((data: IPicture, index: React.Key | null | undefined) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CardPicture
              title={data.title}
              description={data.description}
              price={data.price}
              imageUrl={data.imageUrl}
            ></CardPicture>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PictureCatalog;
