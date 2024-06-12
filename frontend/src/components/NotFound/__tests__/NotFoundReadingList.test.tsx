import { render, screen } from '@testing-library/react';
import NotFoundReadingList from '../NotFoundReadingList';
import '@testing-library/jest-dom';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

describe('NotFoundReadingList Component', () => {
  test('renders with title and subtitle', () => {
    render(<NotFoundReadingList title="No Books Found" subtitle="Try searching again" />);

    const title = screen.getByText(/No Books Found/i);
    expect(title).toBeInTheDocument();

    const subtitle = screen.getByText(/Try searching again/i);
    expect(subtitle).toBeInTheDocument();
  });

  test('renders without subtitle', () => {
    render(<NotFoundReadingList title="No Books Found" />);

    const title = screen.getByText(/No Books Found/i);
    expect(title).toBeInTheDocument();

    const subtitle = screen.queryByText(/Try searching again/i);
    expect(subtitle).toBeNull();
  });

  test('renders with icon', () => {
    render(<NotFoundReadingList title="No Books Found" icon={AutoStoriesIcon} />);
    const icon = screen.getByTestId('AutoStoriesIcon');
    expect(icon).toBeInTheDocument();
  });

  test('renders without icon', () => {
    render(<NotFoundReadingList title="No Books Found" />);

    const icon = screen.queryByTestId('AutoStoriesIcon');
    expect(icon).toBeNull();
  });
});
