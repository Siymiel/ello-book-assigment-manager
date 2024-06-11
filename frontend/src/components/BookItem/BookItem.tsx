import React from "react";
import { BookItemProps } from "./types";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  Grid,
} from "@mui/material";
import { useAvatarColor } from "../../hooks";

const BookItem: React.FC<BookItemProps> = ({ book, onRemove }) => {
  const avatarColor = useAvatarColor(book.readingLevel);

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ border: "2px solid #4AA088", boxShadow: "none" }}>
        <CardHeader
          titleTypographyProps={{ variant: "subtitle2", fontSize: "0.9rem" }}
          title={book.title}
          subheader={book.author}
        />
        <CardMedia
          component="img"
          height="194"
          image={book.coverPhotoURL}
          alt={book.title}
        />

        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 1,
          }}
        >
          <Avatar sx={{ bgcolor: avatarColor, width: 24, height: 24 }}>
            {book.readingLevel}
          </Avatar>
          <Button
            size="small"
            variant="contained"
            onClick={() => onRemove(book)}
          >
            Remove
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default BookItem;
