import React from "react";
import "./style.css";
import { Box } from "@chakra-ui/react";

const Loader = () => {
  return (
    <Box h="100vh">
      <div className="waterfall">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Box>
  );
};

export default Loader;
