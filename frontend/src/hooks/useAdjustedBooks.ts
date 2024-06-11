import { useEffect, useState } from 'react';
import { Book } from '../types';

const useAdjustedBooks = (
  loading: boolean,
  books: Book[] | null,
  publicURL: string
): Book[] => {
  const [adjustedBooks, setAdjustedBooks] = useState<Book[]>([]);

  useEffect(() => {
    if (!loading && books) {
      const adjustedBooks = books.map((book, index) => ({
        ...book,
        id: index,
        coverPhotoURL: `${publicURL}/${book.coverPhotoURL}`,
      }));
      setAdjustedBooks(adjustedBooks);
    }
  }, [loading, books, publicURL]);

  return adjustedBooks;
};

export default useAdjustedBooks;
