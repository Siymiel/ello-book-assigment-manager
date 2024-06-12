import { render, screen } from '@testing-library/react';
import SecondaryNavBar from '../SecondaryNavBar';
import { theme } from '../../../theme';
import '@testing-library/jest-dom';

describe('SecondaryNavBar Component', () => {
  const renderComponent = (props = {}) => {
    return render(<SecondaryNavBar count={0} {...props} />);
  };

  test('renders the AppBar with the correct icons and text', () => {
    renderComponent({ count: 5 });

    const collectionsButton = screen.getByRole('button', { name: /collections-bookmark-icon/i });
    expect(collectionsButton).toBeInTheDocument();

    const readingListText = screen.getByText(/Reading List\(5\)/i);
    expect(readingListText).toBeInTheDocument();
    expect(readingListText).toHaveStyle({ color: theme.palette.common.white });

    const filterButton = screen.getAllByRole('button', { name: /filter-list-icon/i })[0]
    expect(filterButton).toBeInTheDocument();
  });

  test('has the correct AppBar background color', () => {
    renderComponent();

    const appBar = screen.getByRole('banner');
    expect(appBar).toHaveStyle({ backgroundColor: '#335C6E' });
  });
});
