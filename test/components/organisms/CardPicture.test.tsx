import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardPicture from '../../../src/components/organisms/CardPicture/CardPicture';

describe('Card Picture Component', () => {
  test('should renders a card component with all product information', () => {
    const title = 'Any title';
    const description = 'Any description';
    const price = '$50';
    const imageUrl = 'http://example.com/fake-image.png';
    render(
      <CardPicture
        title={title}
        description={description}
        imageUrl={imageUrl}
        price={price}
      />,
    );

    const labelElement = screen.getByText(title);
    const textElement = screen.getByText(description);
    const priceElement = screen.getByText(price);
    const imageElement = screen.getByText(description);

    expect(labelElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
  });
});
