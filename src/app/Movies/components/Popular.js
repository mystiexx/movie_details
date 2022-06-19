import React from "react";
import { Box, Grid, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import Card from "../../../Components/Cards/Card";
import ReactPaginate from "react-paginate";
import "./style.css";

const Popular = ({
  isNotSmallerScreen,
  movies,
  tab_title,
  handlePageClick,
}) => {
  return (
    <Box>
      <Text fontSize="2xl" mb={5}>
        {tab_title}
      </Text>
      <Grid
        templateColumns={
          isNotSmallerScreen ? "repeat(5, 1fr)" : "repeat(2, 1fr)"
        }
        gap={6}
      >
        {movies?.map((data) => (
          <Card
            category={"movie"}
            isNotSmallerScreen={isNotSmallerScreen}
            key={data.id}
            id={data.id}
            poster={data.poster_path}
            name={data.title || data.name}
            rating={data.vote_average}
            date={dayjs(data.release_date).format("YYYY")}
          />
        ))}
      </Grid>

      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        pageCount={25}
        activeClassName={"paginationActive"}
      />
    </Box>
  );
};

export default Popular;
