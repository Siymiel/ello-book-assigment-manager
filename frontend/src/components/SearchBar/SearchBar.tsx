import React, { useState, ChangeEvent, useRef, useEffect } from "react";
import { List, Paper } from "@mui/material";
import { Book } from "../../types";
import { SearchBarProps } from "./types";
import { SearchItem } from "../SearchItemComponent";
import { SearchInput } from "../SearchInput";
import "./SearchBar.css";
import { NotFoundSearchResults } from "../NotFound";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";

const SearchBar: React.FC<SearchBarProps> = ({
  books,
  onAdd,
  loading,
  error,
  setShowOverlay,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    if (value) {
      setFilteredBooks(
        books.filter((book) =>
          book.title.toLowerCase().includes(value.toLowerCase())
        )
      );
      setShowOverlay(true);
    } else {
      setFilteredBooks([]);
      setShowOverlay(false);
    }
  };

  const handleAddBook = (book: Book) => {
    onAdd(book);
    setInputValue("");
    setFilteredBooks([]);
    setShowOverlay(false);
  };

  const handleClearInput = () => {
    setInputValue("");
    setFilteredBooks([]);
    setShowOverlay(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setInputValue("");
      setFilteredBooks([]);
      setShowOverlay(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="search-container" ref={containerRef}>
      <SearchInput
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        handleClearInput={handleClearInput}
      />
      {inputValue.length > 0 && (
        <div className="filtered-books-container">
          {!loading && !error && filteredBooks.length === 0 && (
            <NotFoundSearchResults
              icon={SearchOffIcon}
              subtitle="Book not found"
            />
          )}
          {error && (
            <NotFoundSearchResults
              icon={ReportProblemIcon}
              subtitle="Error while loading books"
            />
          )}
          {filteredBooks.length > 0 && (
            <div className="filtered-books">
              <Paper elevation={3}>
                <List sx={{ padding: "0" }}>
                  {filteredBooks.map((book) => (
                    <SearchItem
                      key={book.id}
                      book={book}
                      handleAddBook={handleAddBook}
                    />
                  ))}
                </List>
              </Paper>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
