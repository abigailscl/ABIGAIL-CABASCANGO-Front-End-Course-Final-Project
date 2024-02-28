import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Catalog } from '../../src/pages';

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

  test('should renders cards', () => {
    render(<Catalog />);

    const titleCard = screen.getAllByText('Card 1');
    const descriptionCard = screen.getAllByText('Description 4');
    const labelPrice = screen.getAllByText('Price');
    const price = screen.getAllByText('$104');

    expect(titleCard).toBeDefined();
    expect(descriptionCard).toBeDefined();
    expect(labelPrice).toBeDefined();
    expect(price).toBeDefined();
  });
});
