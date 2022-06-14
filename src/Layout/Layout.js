import React from "react";
import { Box } from "@chakra-ui/react";
import NavBar from "../Components/NavBar/NavBar";

const Layout = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column">
      <NavBar />
      {children}
    </Box>
  );
};

export default Layout;
