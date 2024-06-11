import { Grid, ListItem, ListItemText, Button } from "@mui/material";
import { ListItemProps } from "./types";

const SearchItemComponent: React.FC<ListItemProps> = ({
  book,
  handleAddBook,
}) => {
  return (
    <ListItem key={book.id} style={{ borderBottom: "1px solid #28B8B8" }}>
      <Grid container alignItems="center" spacing={1}>
        <Grid item xs={1}>
          <img
            src={book.coverPhotoURL}
            alt={book.title}
            style={{ width: "100%", borderRadius: "5px" }}
          />
        </Grid>
        <Grid item xs={8}>
          <ListItemText primary={book.title} secondary={book.author} />
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleAddBook(book)}
            style={{ padding: "4px 8px", fontSize: "0.8rem" }}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default SearchItemComponent;
