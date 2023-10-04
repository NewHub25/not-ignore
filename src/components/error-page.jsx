import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "styled-components";

export const ErrorPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        p: 10,
        boxSizing: "border-box",
      }}
    >
      <Container maxWidth="md">
        <Grid
          container
          spacing={2}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Grid item={true} xs={6}>
            <ComponentToGrid />
          </Grid>
          <Grid item={true} xs={6}>
            <img src="/404.png" alt="error 404" width={200} />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <Grid>
            <ComponentToGrid />
          </Grid>
          <Grid>
            <img src="/404.png" alt="error 404" width={200} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

function ComponentToGrid() {
  const toggleTheme = useContext(ThemeContext);

  return (
    <>
      <Typography variant="h1">404</Typography>
      <Typography variant="h6">
        La página que estás buscando no existe
      </Typography>
      <Button
        variant="contained"
        sx={{ backgroundColor: toggleTheme.principal }}
      >
        <Link to="/">Back Home</Link>
      </Button>
    </>
  );
}
