import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CartDrawer } from '../../../src/components/organisms/Drawer';
import { IPicture } from '../../../src/models';

describe('CartDrawer component', () => {
  const mockPicture: IPicture = {
    id: '1',
    title: 'Card 1',
    description: 'Description 1',
    price: '$101',
    imageUrl: 'url1',
  };

  test('should render correctly with openDrawer is true', () => {
    const { getByText } = render(
      <CartDrawer
        openDrawer={true}
        onClose={() => {null}}
        cartItems={[mockPicture]}
      />,
    );

    expect(getByText('Wishes')).toBeInTheDocument();

    const labelElement = screen.getByText(mockPicture.title);
    const priceElement = screen.getByText(mockPicture.price);

    expect(labelElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
  });

  test('should not render when openDrawer is false', () => {
    const { queryByText } = render(
      <CartDrawer
        openDrawer={false}
        onClose={() => {null}}
        cartItems={[mockPicture]}
      />,
    );

    expect(queryByText('Wishes')).not.toBeInTheDocument();
  });
});
