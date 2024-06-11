import { Book } from "../../types";

export interface BookItemProps {
    book: Book;
    onRemove: (book: Book) => void;
  }