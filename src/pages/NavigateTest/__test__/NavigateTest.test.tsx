import { renderWithBrowser } from '../../../testUtils/render.helper';
import { describe, it, expect } from 'vitest';
import { NavigateTest } from '../NavigateTest';
import { screen } from '@testing-library/react';

describe('Navigate test', () => {
  it('Should handle navigation and render with providers', async () => {
    const { user, history } = renderWithBrowser(<NavigateTest />, {
      route: '/hello',
    });

    await user.click(screen.getByText('Navigate ME'));

    expect(history.location.pathname).eq('/elsewhere');
  });
});
