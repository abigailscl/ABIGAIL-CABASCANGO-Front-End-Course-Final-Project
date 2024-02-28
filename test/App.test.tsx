import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from '../src/App';

describe('renders learn react link', () => {
  test('should render app', () => {
    render(<App />);
    const avatarlElement = screen.getByAltText('logo');
    const labelElement = screen.getAllByText('Ecuaphotos Market');

    expect(avatarlElement).toBeInTheDocument();
    expect(labelElement).toBeDefined();
  });
});
