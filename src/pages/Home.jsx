import { Box, Container, Typography, Button } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Box>
        <Typography variant="h1">Welcome to Flash-Law!</Typography>
      </Box>
      <Button variant="outlined" href="login">
        Login
      </Button>
      <Button variant="outlined" href="register">
        Sign Up
      </Button>
      <Button variant="outlined" href="find-attorney">
        Find an Attorney
      </Button>
    </Container>
  );
};

export default Home;
