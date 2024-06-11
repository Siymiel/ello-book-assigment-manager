import { ApolloError } from '@apollo/client';
import { Book } from '../../types';

export interface SearchBarProps {
  books: Book[];
  onAdd: (book: Book) => void;
  loading: boolean;
  error: ApolloError | undefined;
  showOverlay: boolean;
  setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>;
}
