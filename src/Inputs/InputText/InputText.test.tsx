import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InputText from './index';

describe('Input Text', () => {
  test('calls the onChange callback handler', async () => {
    const onChange = jest.fn();

    render(<InputText value="" onChange={onChange} />);

    await userEvent.type(screen.getByRole('textbox'), 'JavaScript');

    expect(onChange).toHaveBeenCalledTimes(10);
  });

  test('renders label correctly', async () => {
    render(<InputText value="" label="hola" />);
    expect(screen.getByText('hola')).toBeInTheDocument();
  });
});
