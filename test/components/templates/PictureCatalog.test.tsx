import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PictureCatalog from '../../../src/components/templates/PictureCatalog/PictureCatalog';

describe('Catalog Component', () => {
  test('should renders a grid of cards with all product information', () => {
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
    render(<PictureCatalog pictures={pictures} />);

    const labelElement = screen.getByText(pictures[0].title);
    const textElement = screen.getByText(pictures[0].description);
    const priceElement = screen.getByText(pictures[0].price);
    const imageElement = screen.getByText(pictures[0].description);

    expect(labelElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
  });
});
