import React from 'react';
import { Button, Label, Toolbar } from '../../components/atoms';
import { PictureCatalog } from '../../components/templates';
import { Avatar, Box } from '@mui/material';

function Catalog() {
  const pictures = [
    {
      id: '1',
      title: 'Card 1',
      description: 'Description 1',
      price: '$101',
      imageUrl: 'url1',
    },
    {
      id: '2',
      title: 'Card 2',
      description: 'Description 2',
      price: '$102',
      imageUrl: 'url2',
    },
    {
      id: '3',
      title: 'Card 3',
      description: 'Description 3',
      price: '$103',
      imageUrl: 'url3',
    },
    {
      id: '4',
      title: 'Card 4',
      description: 'Description 4',
      price: '$104',
      imageUrl: 'url4',
    },
  ];
  return (
    <Box>
      <Toolbar>
        <Avatar
          alt="logo"
          src="https://scontent.fgye11-1.fna.fbcdn.net/v/t39.30808-6/429783799_850394637099228_2381022966439939489_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=3635dc&_nc_ohc=lyjst7UlyScAX8kYPHs&_nc_ht=scontent.fgye11-1.fna&oh=00_AfBlcuXMkCpo47i9m3roDWmwg_fI4A9R-D-zZfaWZieHhw&oe=65E3A485"
        />
        <Label text="Ecuaphotos Market" />
        <Box sx={{ flexGrow: 1 }}>
          <Button text="Catalog" />
          <Button text="About us" />
        </Box>
        <Button text="Your cart" />
      </Toolbar>
      ,
      <PictureCatalog pictures={pictures} />
    </Box>
  );
}

export default Catalog;
