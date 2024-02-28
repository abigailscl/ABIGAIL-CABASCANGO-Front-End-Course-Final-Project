import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Toolbar from '../../../src/components/atoms/Toolbar/Toolbar';
import '@testing-library/jest-dom';

describe('Toolbar', () => {
  test('should renders children and handles when uses onClick event', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Toolbar onClick={onClickMock}>
        <button>Button 1</button>
        <button>Button 2</button>
      </Toolbar>,
    );

    expect(getByText('Button 1')).toBeInTheDocument();
    expect(getByText('Button 2')).toBeInTheDocument();

    fireEvent.click(getByText('Button 1'));
    fireEvent.click(getByText('Button 2'));

    expect(onClickMock).toHaveBeenCalledTimes(2);
  });
});
