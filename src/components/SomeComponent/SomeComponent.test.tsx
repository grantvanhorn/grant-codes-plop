import { render } from '@testing-library/react';
import SomeComponent from './SomeComponent';

describe('SomeComponent', () => {
  it('renders and matches the snapshot', () => {
    const { getByText } = render(<SomeComponent />);

    expect(getByText('SomeComponent created via plop')).toBeInTheDocument();
  });
});
