import { Book } from "../../types";

export interface ReadingListProps {
  books: Book[];
  onRemove: (book: Book) => void;
}
