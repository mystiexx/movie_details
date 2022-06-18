import React from "react";
import { Box } from "@chakra-ui/react";

const TV = ({ isNotSmallerScreen, ...props }) => {
  return (
    <Box>
      <Box
        bgImage={`url(https://image.tmdb.org/t/p/original/${props.image})`}
        w="100%"
        h="50vh"
        position="relative"
        top="0"
        zIndex="-2"
        bgRepeat="no-repeat"
        bgPosition="center center"
        bgSize="cover"
      >
        {" "}
      </Box>
      <Box
        background="linear-gradient(359.8deg, #111111 0.15%, rgba(0, 0, 0, 0.58) 136.09%)"
        w="100%"
        h="50.2vh"
        position="relative"
        marginTop={isNotSmallerScreen ? "-27.9%" : "-112.6%"}
        zIndex="-1"
        bgRepeat="no-repeat"
        objectFit="contain"
      />
    </Box>
  );
};

export default TV;
