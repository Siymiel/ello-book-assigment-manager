import React from "react";
import { Grid } from "@mui/material";
import { ReadingListProps } from "./types";
import { BookItem } from "../BookItem";
import { NotFoundReadingList } from "../NotFound";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

const ReadingList: React.FC<ReadingListProps> = ({ books, onRemove }) => {
  return (
    <Grid
      container
      spacing={3}
      style={{ marginTop: "1px", marginBottom: "40px" }}
    >
      {books.length > 0 ? (
        books.map((book) => (
          <BookItem key={book.id} book={book} onRemove={onRemove} />
        ))
      ) : (
        <NotFoundReadingList
          icon={AutoStoriesIcon}
          title="No Books In Reading List"
          subtitle="Search book by title and add to Reading List"
        />
      )}
    </Grid>
  );
};

export default ReadingList;
