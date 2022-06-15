import React, { useState, useEffect } from "react";
import Layout from "../../Layout/Layout";
import { Box, Container, Grid } from "@chakra-ui/react";
import Card from "../../Components/Cards/Card";
import dayjs from "dayjs";
import { useMediaQuery } from "@chakra-ui/media-query";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Loader from "../../Components/Loader/Loader";
import API from "../../api";

const Movies = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const pop = await API.get(
        `/movie/popular?api_key=d0ff6f9cb6c33dcc6bc0c0a6381f2884`
      );
      setMovies(pop.data.results);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Layout>
          <Box mt={8}>
            <Container maxW="container.xl">
              <Box mb={8}>
                <SearchBar data={movies} placeholder="Search Movie Name..." />
              </Box>
              <Box pb={5}>
                <Grid
                  templateColumns={
                    isNotSmallerScreen ? "250px auto" : "repeat(1, 1fr)"
                  }
                  gap={3}
                >
                  <Box>Hello</Box>
                  <Box>
                    <Grid
                      templateColumns={
                        isNotSmallerScreen ? "repeat(5, 1fr)" : "repeat(2, 1fr)"
                      }
                      gap={6}
                    >
                      {movies?.map((data) => (
                        <Card
                          key={data.id}
                          id={data.id}
                          poster={data.poster_path}
                          name={data.title}
                          rating={data.vote_average}
                          date={dayjs(data.release_date).format("YYYY")}
                        />
                      ))}
                    </Grid>
                  </Box>
                </Grid>
              </Box>
            </Container>
          </Box>
        </Layout>
      )}
    </>
  );
};

export default Movies;
