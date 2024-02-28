import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardActionsPicture from '../../../src/components/molecules/CardActions/CardActions';

describe('Card Actions Component', () => {
  test('should renders a card actions with button to add to cart and pricing', () => {
    const labelText = 'Any text';
    const buttonText = 'Add o cart';
    const price = '$50';
    render(
      <CardActionsPicture
        labelText={labelText}
        priceText={price}
        buttonText={buttonText}
      />,
    );

    const labelElement = screen.getByText(labelText);
    const buttonElement = screen.getByText(buttonText);
    const textElement = screen.getByText(price);

    expect(labelElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
  });
});
