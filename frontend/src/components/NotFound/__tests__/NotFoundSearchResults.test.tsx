import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotFoundSearchResults from '../NotFoundSearchResults';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

describe('NotFoundSearchResults Component', () => {
  test('renders with subtitle', () => {
    render(<NotFoundSearchResults subtitle="No results found" />);

    const subtitle = screen.getByText(/No results found/i);
    expect(subtitle).toBeInTheDocument();
  });

  test('renders with icon', () => {
    render(<NotFoundSearchResults subtitle="No results found" icon={AutoStoriesIcon} />);

    const icon = screen.getByTestId('AutoStoriesIcon');
    expect(icon).toBeInTheDocument();
  });

  test('renders without icon', () => {
    render(<NotFoundSearchResults subtitle="No results found" />);

    const icon = screen.queryByTestId('AutoStoriesIcon');
    expect(icon).toBeNull();
  });
});
