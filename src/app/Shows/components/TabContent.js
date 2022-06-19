import React from "react";
import { Box, Grid, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import TvCard from "../../../Components/Cards/TvCard";
import ReactPaginate from "react-paginate";
import "./style.css";

const TabContent = ({
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
          <TvCard
          isNotSmallerScreen={isNotSmallerScreen}
            key={data.id}
            id={data.id}
            poster={data.poster_path}
            name={data.name}
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

export default TabContent;
