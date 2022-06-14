import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import "./style.css";

const SlideCard = ({ category }) => {
  return (
    <Box>
      <div className="card-wrapper">
        {category?.map((data) => (
          <Box
            key={data.id}
            className="mv-box"
            w="300px"
            _hover={{
              
              cursor: "pointer",
            }}
          >
            <Image
              src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
              alt="movie-image"
              objectFit="center"
              w="100%"
            />
            <Text fontSize="sm" fontWeight="400" mt={1}>
              {data?.title}
            </Text>
          </Box>
        ))}
      </div>
    </Box>
  );
};

export default SlideCard;
