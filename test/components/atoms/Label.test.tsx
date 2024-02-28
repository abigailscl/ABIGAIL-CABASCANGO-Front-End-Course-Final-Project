import React from 'react';
import { render, screen } from '@testing-library/react';
import Label from '../../../src/components/atoms/Label/Label';
import '@testing-library/jest-dom';

describe('Label Component', () => {
  test('should renders label with any text', () => {
    const labelText = 'Any text';
    render(<Label text={labelText} />);

    const labelElement = screen.getByText(labelText);

    expect(labelElement).toBeInTheDocument();
  });
});
