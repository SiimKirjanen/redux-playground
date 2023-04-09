import React from 'react'

import { fireEvent, screen } from '@testing-library/react'
import { renderWithProviders } from '../../utils/test/render-with-providers'
import Counter from '.'

describe('Counter', () => {
  it('should render counter', () => {
    renderWithProviders(<Counter />);

    screen.getByText('Counter');
    screen.getByRole('button', {
      name: /increment/i
    })
    screen.getByRole('button', {
      name: /decrement/i
    })
  });

  it('should increment counter', () => {
    renderWithProviders(<Counter />);

    fireEvent.click( screen.getByRole('button', {name: /increment/i}) );
    fireEvent.click( screen.getByRole('button', {name: /increment/i}) );

    screen.getByText('2');
  });

  it('should decrement counter', () => {
    renderWithProviders(<Counter />, {
      preloadedState: {
        counter: {
          value: 5
        }
      }
    });

    fireEvent.click( screen.getByRole('button', {name: /decrement/i}) );
    fireEvent.click( screen.getByRole('button', {name: /decrement/i}) );

    screen.getByText('3');
  });
});

