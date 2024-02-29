import React from 'react';
import { render } from '@testing-library/react';
import { BoxItemCart } from '../../../src/components/molecules/BoxItemCart';

describe('BoxItemCart component', () => {
  const imageUrl = 'example.jpg';
  const imageTitle = 'Item';
  const price = '10';

  test('should render correctly with given props', () => {
    const { getByAltText, getByText } = render(
      <BoxItemCart imageUrl={imageUrl} imageTitle={imageTitle} price={price} />,
    );

    expect(getByAltText('logo')).toBeInTheDocument();
    expect(getByText(imageTitle)).toBeInTheDocument();
    expect(getByText(price.toString())).toBeInTheDocument();
  });
});
