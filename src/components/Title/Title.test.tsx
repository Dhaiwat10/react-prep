import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { Title } from './';

describe('Title', () => {
  it('should render content', async () => {
    render(<Title text="Dhaiwat" />);

    const title = await screen.getByText('Dhaiwat');
    expect(title).toBeTruthy();
  });
});
