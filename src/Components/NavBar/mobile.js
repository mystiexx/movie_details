import React from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const Mobile = ({ toggle }) => {
  return (
    <Box>
      <IconButton
        onClick={toggle}
        icon={<AiOutlineClose color="#fff" size={20} />}
        backgroundColor="transparent"
      />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        h="90vh"
      >
        <NavLink to="/" style={{ marginBottom: "30px" }}>
          Home
        </NavLink>
        <NavLink to="/movies" style={{ marginBottom: "30px" }}>
          Movies
        </NavLink>

        <NavLink to="/tv_shows" style={{ marginBottom: "30px" }}>
          TV Shows
        </NavLink>
      </Box>
    </Box>
  );
};

export default Mobile;
