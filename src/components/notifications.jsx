import { Close } from "@mui/icons-material";
import { Card, CardActions, IconButton, Typography } from "@mui/material";
import { SnackbarContent, closeSnackbar } from "notistack";
import { forwardRef } from "react";

export const notificationSuccess = forwardRef(function notificationSuccess(
  { message },
  ref
) {
  const handleDismiss = () => {
    closeSnackbar();
  };

  return (
    <SnackbarContent ref={ref}>
      <Card
        style={{ backgroundColor: "#009032", color: "#eee", minWidth: "150px" }}
      >
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body2">{message}</Typography>
          <IconButton size="small" onClick={handleDismiss}>
            <Close fontSize="small" />
          </IconButton>
        </CardActions>
      </Card>
    </SnackbarContent>
  );
});

export const notificationInfo = forwardRef(function notificationSuccess(
  { message },
  ref
) {
  const handleDismiss = () => {
    closeSnackbar();
  };

  return (
    <SnackbarContent ref={ref}>
      <Card
        style={{ backgroundColor: "#0090de", color: "#eee", minWidth: "150px" }}
      >
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body2">{message}</Typography>
          <IconButton size="small" onClick={handleDismiss}>
            <Close fontSize="small" />
          </IconButton>
        </CardActions>
      </Card>
    </SnackbarContent>
  );
});
