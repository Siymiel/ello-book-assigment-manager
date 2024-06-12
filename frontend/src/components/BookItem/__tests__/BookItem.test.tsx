import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookItem from '../BookItem';
import { BookItemProps } from '../types';

jest.mock('../../../hooks', () => ({
  useAvatarColor: jest.fn(),
}));

const renderComponent = (props: Partial<BookItemProps> = {}) => {
  const defaultProps: BookItemProps = {
    book: {
      id: 1,
      title: 'Test Book',
      author: 'Test Author',
      coverPhotoURL: 'test-cover.jpg',
      readingLevel: 'A',
    },
    onRemove: jest.fn(),
  };
  return render(<BookItem {...defaultProps} {...props} />);
};

describe('BookItem Component', () => {
  test('renders with correct book details', () => {
    const book = {
      id: 1,
      title: 'Test Book',
      author: 'Test Author',
      coverPhotoURL: 'test-cover.jpg',
      readingLevel: 'A',
    };
    renderComponent({ book });

    expect(screen.getByText(book.title)).toBeInTheDocument();
    expect(screen.getByText(book.author)).toBeInTheDocument();
    expect(screen.getByAltText(book.title)).toHaveAttribute('src', book.coverPhotoURL);
    expect(screen.getByText(book.readingLevel)).toBeInTheDocument();
  });

  test('calls onRemove when remove button is clicked', () => {
    const book = {
      id: 1,
      title: 'Test Book',
      author: 'Test Author',
      coverPhotoURL: 'test-cover.jpg',
      readingLevel: 'A',
    };
    const onRemove = jest.fn();
    renderComponent({ book, onRemove });

    const removeButton = screen.getByRole('button', { name: /remove/i });
    fireEvent.click(removeButton);

    expect(onRemove).toHaveBeenCalledTimes(1);
    expect(onRemove).toHaveBeenCalledWith(book);
  });

  test('renders with correct avatar color', () => {
    renderComponent();

    const avatar = screen.getByText('A');
    expect(avatar).toHaveStyle('background-color: rgb(189, 189, 189)');
  });
});
