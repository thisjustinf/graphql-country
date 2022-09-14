import { Box, Icon, useColorMode } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box as="nav">
      <Box>
        <Link to="/"> </Link>
        <Link to="/">World Tour</Link>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default Navbar;
