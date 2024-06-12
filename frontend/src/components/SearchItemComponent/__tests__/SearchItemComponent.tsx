import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchItemComponent from '../SearchItemComponent';
import { ListItemProps } from '../types';

const mockBook = {
  id: 1,
  title: 'Test Book',
  author: 'Test Author',
  coverPhotoURL: 'https://localhost:3000/test-cover.jpg',
  readingLevel: 'B',
};

const renderComponent = (props: Partial<ListItemProps> = {}) => {
  const defaultProps: ListItemProps = {
    book: mockBook,
    handleAddBook: jest.fn(),
    ...props,
  };

  return render(<SearchItemComponent {...defaultProps} />);
};

describe('SearchItemComponent', () => {
  test('renders with book details', () => {
    renderComponent();

    const title = screen.getByText(mockBook.title);
    const author = screen.getByText(mockBook.author);
    expect(title).toBeInTheDocument();
    expect(author).toBeInTheDocument();

    const coverPhoto = screen.getByAltText(mockBook.title);
    expect(coverPhoto).toBeInTheDocument();
    expect(coverPhoto).toHaveAttribute('src', mockBook.coverPhotoURL);
  });

  test('calls handleAddBook when "Add" button is clicked', () => {
    const handleAddBook = jest.fn();
    renderComponent({ handleAddBook });

    const addButton = screen.getByText(/add/i);
    fireEvent.click(addButton);

    expect(handleAddBook).toHaveBeenCalledTimes(1);
    expect(handleAddBook).toHaveBeenCalledWith(mockBook);
  });

  test('applies correct styles', () => {
    renderComponent();

    const listItem = screen.getByRole('listitem');
    expect(listItem).toHaveStyle('border-bottom: 1px solid #28B8B8');

    const coverPhoto = screen.getByAltText(mockBook.title);
    expect(coverPhoto).toHaveStyle('width: 100%');
    expect(coverPhoto).toHaveStyle('border-radius: 5px');

    const addButton = screen.getByText(/add/i);
    expect(addButton).toHaveStyle('padding: 4px 8px');
    expect(addButton).toHaveStyle('font-size: 0.8rem');
  });
});
