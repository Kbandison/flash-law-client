import { Box, Container, Typography, Button } from "@mui/material";
import React from "react";
import image from "../images/pexels-august-de-richelieu-4427430.jpg";

const Home = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        // border: 1,
        backgroundImage: `url(${image})`,
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          width: "100vw",
          height: "80vh",
          // border: 3,
          background: "rgb(0,0,0,0.2)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Box>
          <Typography variant="h2">Welcome to Flash-Law</Typography>
        </Box>
        <Button variant="contained" href="login">
          Login
        </Button>
        <Button variant="contained" href="register">
          Sign Up
        </Button>
        <Button variant="contained" href="find-attorney">
          Find an Attorney
        </Button>
      </Container>
    </Container>
  );
};

export default Home;
