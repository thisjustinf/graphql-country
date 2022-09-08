import { Box, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import Country from "../../types/Country";

const CountryCard: FC<Country> = ({ name, emoji }) => {
  const property = {};
  return (
    <Box maxW="md" maxH="md" overflow="hidden">
      <Text as="p">
        {name} {emoji}
      </Text>
    </Box>
  );
};

export default CountryCard;
