import { Box, HStack, Tag, TagLabel, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import Country from "../../types/Country";

const CountryCard: FC<Country> = ({
  name,
  emoji,
  capital,
  currency,
  continent
}) => {
  return (
    <Box
      maxW="lg"
      maxH="md"
      overflow="hidden"
      borderColor="gray.300"
      borderRadius="md"
      borderWidth="3px"
      border="3px"
      padding="0.5em"
    >
      <Box display="flex" flexDirection="column">
        <Text fontSize="2em">
          {emoji} {name}
        </Text>
      </Box>
      <HStack mx="0.5em">
        <Tag
          size="md"
          padding="5px"
          bgColor="teal"
          color="white"
          fontWeight="semibold"
        >
          <TagLabel>🌐 {continent.name}</TagLabel>
        </Tag>
        <Tag
          size="md"
          padding="5px"
          bgColor="teal"
          color="white"
          fontWeight="semibold"
        >
          <TagLabel>📍 {capital}</TagLabel>
        </Tag>
        <Tag
          size="md"
          padding="5px"
          bgColor="teal"
          color="white"
          fontWeight="semibold"
        >
          <TagLabel>💸 {currency}</TagLabel>
        </Tag>
      </HStack>
    </Box>
  );
};

export default CountryCard;
