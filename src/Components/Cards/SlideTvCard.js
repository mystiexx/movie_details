import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import "./style.css";
import dayjs from "dayjs";

const SlideTvCard = ({ category }) => {
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
            <a href={`/tv/${data.original_name.replace(/([a-z])([A-Z])/, '$1 $2')}/${data.id}`}>
              <Image
                src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                alt="movie-image"
                objectFit="center"
                w="100%"
              />
              <Text fontSize="sm" fontWeight="400" mt={1}>
                {data?.name}
              </Text>
              <Text fontSize="sm" fontWeight="400" mt={1} color="#FFFFFF4A">
                {dayjs(data?.release_date).format("MMM D, YYYY")}
              </Text>
            </a>
          </Box>
        ))}
      </div>
    </Box>
  );
};

export default SlideTvCard;
