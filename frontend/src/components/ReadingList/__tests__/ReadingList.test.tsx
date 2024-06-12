import { render, screen } from '@testing-library/react';
import ReadingList from '../ReadingList';
import '@testing-library/jest-dom';

const mockBooks = [
  { id: 1, title: 'Book 1', author: 'Jon Snow', coverPhotoURL: 'cover1.jpg', readingLevel: 'E' },
  { id: 2, title: 'Book 2', author: 'Arya Stark', coverPhotoURL: 'cover2.jpg', readingLevel: 'D' }
];

describe('ReadingList Component', () => {
  test('renders with books', () => {
    render(<ReadingList books={mockBooks} onRemove={jest.fn()} />);

    const bookItems = screen.getAllByTestId('book-item');
    expect(bookItems).toHaveLength(mockBooks.length);
  });

  test('renders not found message when no books are present', () => {
    render(<ReadingList books={[]} onRemove={jest.fn()} />);

    const notFoundMessage = screen.getByText('No Books In Reading List');
    expect(notFoundMessage).toBeInTheDocument();

    const subtitle = screen.getByText('Search book by title and add to Reading List');
    expect(subtitle).toBeInTheDocument();
  });
});
