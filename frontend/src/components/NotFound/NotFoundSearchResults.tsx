import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { theme } from "../../theme";

interface NotFoundProps {
  icon?: React.ElementType<any>;
  subtitle: string;
}

const Container = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  maxWidth: 600,
  margin: "auto",
  marginTop: "1px",
  backgroundColor: theme.palette.common.white,
  padding: "6px",
  borderRadius: "8px",
});

const NotFoundSearchResults: React.FC<NotFoundProps> = ({
  icon: Icon,
  subtitle,
}) => {
  return (
    <Container>
      {Icon && <Icon style={{ fontSize: 30, marginRight: "8px" }} />}
      {subtitle && <Typography variant="body1">{subtitle}</Typography>}
    </Container>
  );
};

export default NotFoundSearchResults;
