import { Book } from '../../types';

export interface ListItemProps {
  book: Book;
  handleAddBook: (book: Book) => void;
}
