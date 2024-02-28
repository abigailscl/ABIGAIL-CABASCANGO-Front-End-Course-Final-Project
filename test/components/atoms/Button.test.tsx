import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../../src/components/atoms/Button/Button';
import '@testing-library/jest-dom';

describe('Button component', () => {
  const buttonText = 'Any text';

  test('should renders button with any text when set text prop', () => {
    render(<Button text={buttonText} />);

    const textButton = screen.getByText(buttonText);

    expect(textButton).toBeInTheDocument();
  });

  test('should renders button with left icon and text when uses left as iconPosition prop', () => {
    render(
      <Button
        text={buttonText}
        icon={<span data-testid="left-icon" />}
        iconPosition="left"
      />,
    );

    const buttonElement = screen.getByText(buttonText);
    const iconElement = screen.getByTestId('left-icon');

    expect(buttonElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
  });

  test('should renders button with right icon and text when uses right as iconPosition prop', () => {
    render(
      <Button
        text={buttonText}
        icon={<span data-testid="right-icon" />}
        iconPosition="right"
      />,
    );

    const buttonElement = screen.getByText(buttonText);
    const iconElement = screen.getByTestId('right-icon');

    expect(buttonElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
  });

  test('should calls onClick prop when button is clicked', () => {
    const onClickMock = jest.fn();
    render(<Button text={buttonText} onClick={onClickMock} />);

    const buttonElement = screen.getByText(buttonText);
    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  test('should enables button by default', () => {
    render(<Button text={buttonText} />);

    const buttonElement = screen.getByText(buttonText);

    expect(buttonElement).not.toBeDisabled();
  });

  test('should enables button with disable elevation', () => {
    render(<Button text={buttonText} />);

    const buttonElement = screen.getByRole('button');

    expect(buttonElement).not.toHaveAttribute('boxShadow: none');
  });
});
