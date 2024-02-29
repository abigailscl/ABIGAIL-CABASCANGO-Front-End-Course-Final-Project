import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Catalog } from '../../src/pages';
import { getCatalogPictures } from '../../src/pages/Catalog/catalogFunctions';
import { IPicture } from '../../src/models';

jest.mock('../../src/pages/Catalog/catalogFunctions', () => ({
  getCatalogPictures: jest.fn(),
}));
describe('Catalog Page', () => {
  test('should renders avatar with logo', () => {
    render(<Catalog />);

    const avatarlElement = screen.getByAltText('logo');
    const labelElement = screen.getAllByText('Ecuaphotos Market');

    expect(avatarlElement).toBeInTheDocument();
    expect(labelElement).toBeDefined();
  });

  test('should renders buttons in toolbar', () => {
    render(<Catalog />);

    const buttonCatalog = screen.getAllByText('Catalog');
    const buttonInfo = screen.getAllByText('About us');
    const buttonCart = screen.getAllByText('Your cart');

    expect(buttonCatalog).toBeDefined();
    expect(buttonInfo).toBeDefined();
    expect(buttonCart).toBeDefined();
  });

  test('should renders cards with info from server', async () => {
    const mockPictures: IPicture[] = [
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
    (getCatalogPictures as jest.Mock).mockResolvedValueOnce(mockPictures);

    render(<Catalog />);

    await waitFor(() => expect(getCatalogPictures).toHaveBeenCalled());
  });
});
