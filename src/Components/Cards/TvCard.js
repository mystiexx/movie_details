import React from "react";
import { Box, Text, Image, Flex } from "@chakra-ui/react";
import ReactStars from "react-stars";
import { Link } from "react-router-dom";

const TvCard = ({ id, poster, name, date, rating }) => {
  return (
    <Box>
      <Link to={`/tv/${name}/${id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${poster}`}
          alt={`https://image.tmdb.org/t/p/original/${poster}`}
          objectFit="cover"
          w="100%"
          h="350px"
        />
        <Text mt={2} fontSize="md" fontFamily="Joan">
          {name}{" "}
        </Text>
        <Text mt={1} fontSize="sm" fontWeight="400" color="#FFFFFF4A">
          {date}{" "}
        </Text>
        <Flex alignContent="center" alignItems="center">
          <ReactStars
            count={rating}
            value={rating}
            color2="#FF7600"
            edit="false"
            size={14}
          />
          <Text color="#FF7600" ml={2}>
            {rating}
          </Text>
        </Flex>
      </Link>
    </Box>
  );
};

export default TvCard;
