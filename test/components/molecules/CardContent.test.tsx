import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardContentPicture from '../../../src/components/molecules/CardContent/CardContent';

describe('Card Content Component', () => {
  test('should renders a card actions with button to add to cart and pricing', () => {
    const title = 'Any title';
    const description = 'Any description';
    render(<CardContentPicture title={title} description={description} />);

    const labelElement = screen.getByText(title);
    const textElement = screen.getByText(description);

    expect(labelElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
  });
});
