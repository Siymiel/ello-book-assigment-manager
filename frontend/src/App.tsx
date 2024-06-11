import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { Book } from "./types";
import { gql, useQuery } from "@apollo/client";
import { useAdjustedBooks } from "./hooks";
import { NavBar, ReadingList, SearchBar, SecondaryNavBar } from "./components";
import "./App.css";

const GET_BOOKS = gql`
  query Books {
    books {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`;

const App: React.FC = () => {
  const [readingList, setReadingList] = useState<Book[]>([]);
  const [allBooks, setAllBooks] = useState<Book[]>([]);
  const [showOverlay, setShowOverlay] = useState(false);
  

  const { loading, error, data } = useQuery(GET_BOOKS);

  const publicURL = "http://localhost:3000";
  const adjustedBooks = useAdjustedBooks(loading, data?.books, publicURL);

  useEffect(() => {
    if (adjustedBooks) {
      setAllBooks(adjustedBooks);
    }
  }, [adjustedBooks]);

  const handleAddBook = (book: Book) => {
    setReadingList([...readingList, book]);
    setAllBooks(allBooks.filter((b) => b.id !== book.id));
  };

  const handleRemoveBook = (book: Book) => {
    setReadingList(readingList.filter((b) => b.id !== book.id));
    setAllBooks([...allBooks, book]);
  };

  return (
    <>
      <NavBar />
      <Container>
        <SearchBar
          books={allBooks}
          onAdd={handleAddBook}
          loading={loading}
          error={error}
          showOverlay={showOverlay}
          setShowOverlay={setShowOverlay}
        />
        {showOverlay && <div className="overlay" />}
        <Container
          sx={{
            marginTop: "10px",
            backgroundColor: "#FFFFFF",
            borderRadius: "5px",
          }}
        >
          <SecondaryNavBar count={readingList?.length} />
          <ReadingList books={readingList} onRemove={handleRemoveBook} />
        </Container>
      </Container>
    </>
  );
};

export default App;
