import React, { useState, useEffect } from "react";
import { Box, Container, Text, IconButton } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import "./style.css";
import { useMediaQuery } from "@chakra-ui/media-query";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Modal from "../Modal/Modal";
import Mobile from "./mobile";

const NavBar = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  return (
    <Box>
      <Modal Open={open} toggle={toggle}>
        <Mobile toggle={toggle} />
      </Modal>
      <Container maxW="container.xl">
        <Box
          display="flex"
          justifyContent="space-between"
          alignContent="center"
          alignItems="center"
          pt={3}
          pb={3}
        >
          <Text>Movie fanfare</Text>

          <IconButton
            display={isNotSmallerScreen ? "none" : "block"}
            icon={<HiOutlineMenuAlt3 size={30} color="#fff" />}
            backgroundColor="transparent"
            onClick={() => setOpen(!open)}
          />
          <Box display={isNotSmallerScreen ? "block" : "none"}>
            <NavLink to="/" className="item" activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/movies" className="item" activeClassName="active">
              Movies
            </NavLink>
            <NavLink to="/tv_shows" className="item" activeClassName="active">
              TV Shows
            </NavLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NavBar;
