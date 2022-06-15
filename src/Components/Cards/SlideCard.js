import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import "./style.css";
import dayjs from "dayjs";

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
              {data?.title || data?.original_name}
            </Text>
            <Text fontSize="sm" fontWeight="400" mt={1} color="#FFFFFF4A">
              {dayjs(data?.release_date).format('MMM D, YYYY')}
            </Text>
          </Box>
        ))}
      </div>
    </Box>
  );
};

export default SlideCard;
