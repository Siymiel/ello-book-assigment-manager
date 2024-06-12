import { renderHook } from '@testing-library/react';
import useAdjustedBooks from '../useAdjustedBooks';

describe('useAdjustedBooks Hook', () => {
  test('returns empty array when loading is true', () => {
    const { result } = renderHook(() =>
      useAdjustedBooks(true, null, '/public')
    );
    expect(result.current).toEqual([]);
  });

  test('returns empty array when books is null', () => {
    const { result } = renderHook(() =>
      useAdjustedBooks(false, null, '/public')
    );
    expect(result.current).toEqual([]);
  });

  test('adjusts books when loading is false and books is not null', () => {
    const books = [
      { id: 1, title: 'Book 1', coverPhotoURL: 'cover1.jpg', author: "John Doe", readingLevel: 'C'  },
      { id: 2, title: 'Book 2', coverPhotoURL: 'cover2.jpg', author: "John Doe", readingLevel: 'H'  }
    ];
    const { result } = renderHook(() =>
      useAdjustedBooks(false, books, '/public')
    );
    const adjustedBooks = result.current;
    expect(adjustedBooks).toHaveLength(books.length);
    adjustedBooks.forEach((book, index) => {
      expect(book.id).toEqual(index);
      expect(book.coverPhotoURL).toEqual(`/public/${books[index].coverPhotoURL}`);
    });
  });
});
