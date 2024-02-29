import React from 'react';
import { Drawer } from '@mui/material';
import { ICartDrawerProps } from './type';
import { BoxItemCart } from '../../molecules/BoxItemCart';
import { Button } from '../../atoms';
import { IPicture } from '../../../models';

const CartDrawer: React.FC<ICartDrawerProps> = ({
  openDrawer,
  onClose,
  cartItems,
}) => {
  return (
    <Drawer anchor={'right'} open={openDrawer} onClose={() => onClose(false)}>
      Wishes
      {cartItems.map((item: IPicture, index: React.Key) => (
        <BoxItemCart
          key={index}
          imageUrl={item.imageUrl}
          imageTitle={item.title}
          price={item.price}
        />
      ))}
      <Button text="Go to checkout" />
    </Drawer>
  );
};

export default CartDrawer;
