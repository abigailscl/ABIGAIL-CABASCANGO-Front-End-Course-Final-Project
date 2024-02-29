import React, { useEffect, useState } from 'react';
import { Avatar, Box } from '@mui/material';
import { Button, Label, Toolbar } from '../../components/atoms';
import { PictureCatalog } from '../../components/templates';
import { getCatalogPictures } from './catalogFunctions';
import { IPicture, initialPicture } from '../../models';
import { CartDrawer } from '../../components/organisms/Drawer';

function Catalog() {
  const [catalogPictures, setCatalogPictures] =
    useState<IPicture[]>(initialPicture);
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const getPicturesAsync = async () => {
    const pictures: IPicture[] = await getCatalogPictures();
    setCatalogPictures(pictures);
  };

  const toggleDrawer = (open: boolean) => () => {
    setOpenDrawer(open);
  };

  useEffect(() => {
    getPicturesAsync();
  }, []);

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
        <div>
          <Button
            data-testid="cart-button"
            text="Your cart"
            onClick={toggleDrawer(true)}
          />
          <CartDrawer
            openDrawer={openDrawer}
            onClose={toggleDrawer(false)}
            cartItems={catalogPictures}
          />
        </div>
      </Toolbar>
      <div>
        <PictureCatalog pictures={catalogPictures} />
      </div>
    </Box>
  );
}

export default Catalog;
