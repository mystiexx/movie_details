import React, { useState, useEffect } from "react";
import Layout from "../../Layout/Layout";
import { Box, Container } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Loader from "../../Components/Loader/Loader";
import API from "../../api";
import Popular from "./components/Popular";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const Movies = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");
  const [movies, setMovies] = useState([]);
  const [playing, setPlaying] = useState([]);
  const [coming, setComing] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const pop = await API.get(
        `/movie/popular?api_key=d0ff6f9cb6c33dcc6bc0c0a6381f2884`
      );
      const play = await API.get(
        `/movie/now_playing?api_key=d0ff6f9cb6c33dcc6bc0c0a6381f2884`
      );
      const come = await API.get(
        `/movie/upcoming?api_key=d0ff6f9cb6c33dcc6bc0c0a6381f2884&`
      );
      const rated = await API.get(
        `/movie/top_rated?api_key=d0ff6f9cb6c33dcc6bc0c0a6381f2884`
      );
      setMovies(pop.data.results);
      setPlaying(play.data.results);
      setComing(come.data.results);
      setTopRated(rated.data.results);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const getNextPage = async (currentPage) => {
    const pop = await API.get(
      `/movie/popular?api_key=d0ff6f9cb6c33dcc6bc0c0a6381f2884&page=${currentPage}`
    );

    const data = pop.data.results;
    return data;
  };

  const getPlayingPage = async (currentPage) => {
    const play = await API.get(
      `/movie/now_playing?api_key=d0ff6f9cb6c33dcc6bc0c0a6381f2884&page=${currentPage}`
    );
    const data = play.data.results;
    return data;
  };

  const getUpcomingPage = async (currentPage) => {
    const play = await API.get(
      `/movie/upcoming?api_key=d0ff6f9cb6c33dcc6bc0c0a6381f2884&page=${currentPage}`
    );
    const data = play.data.results;
    return data;
  };

  const getRated = async (currentPage) => {
    const play = await API.get(
      `/movie/top_rated?api_key=d0ff6f9cb6c33dcc6bc0c0a6381f2884&page=${currentPage}`
    );
    const data = play.data.results;
    return data;
  };

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    const movies = await getNextPage(currentPage);
    setMovies(movies);
    window.scrollTo(0, 0);
  };

  const handleNowPlaying = async (data) => {
    let currentPage = data.selected + 1;
    const play = await getPlayingPage(currentPage);
    setPlaying(play);
    window.scrollTo(0, 0);
  };

  const handleUpcoming = async (data) => {
    let currentPage = data.selected + 1;
    const play = await getUpcomingPage(currentPage);
    setComing(play);
    window.scrollTo(0, 0);
  };

  const handleRated = async (data) => {
    let currentPage = data.selected + 1;
    const play = await getRated(currentPage);
    setTopRated(play);
    window.scrollTo(0, 0);
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
                <Tabs variant="unstyled">
                  <Box>
                    <TabList>
                      <Tab
                        fontSize={isNotSmallerScreen ? "md" : "sm"}
                        _selected={{
                          color: "white",
                          bg: "#FF7600",
                          borderRadius: "5px",
                        }}
                      >
                        Popular
                      </Tab>
                      <Tab
                        fontSize={isNotSmallerScreen ? "md" : "sm"}
                        _selected={{
                          color: "white",
                          bg: "#FF7600",
                          borderRadius: "5px",
                        }}
                      >
                        Now Playing
                      </Tab>
                      <Tab
                        fontSize={isNotSmallerScreen ? "md" : "sm"}
                        _selected={{
                          color: "white",
                          bg: "#FF7600",
                          borderRadius: "5px",
                        }}
                      >
                        Upcoming
                      </Tab>
                      <Tab
                        fontSize={isNotSmallerScreen ? "md" : "sm"}
                        _selected={{
                          color: "white",
                          bg: "#FF7600",
                          borderRadius: "5px",
                        }}
                      >
                        Top Rated
                      </Tab>
                    </TabList>
                  </Box>
                  <Box mt={5}>
                    <TabPanels>
                      <TabPanel>
                        <Popular
                          tab_title={"Popular"}
                          isNotSmallerScreen={isNotSmallerScreen}
                          movies={movies}
                          handlePageClick={handlePageClick}
                        />
                      </TabPanel>
                      <TabPanel>
                        <Popular
                          tab_title="Now Playing"
                          isNotSmallerScreen={isNotSmallerScreen}
                          movies={playing}
                          handlePageClick={handleNowPlaying}
                        />
                      </TabPanel>
                      <TabPanel>
                        <Popular
                          tab_title="Upcoming"
                          isNotSmallerScreen={isNotSmallerScreen}
                          movies={coming}
                          handlePageClick={handleUpcoming}
                        />
                      </TabPanel>
                      <TabPanel>
                        <Popular
                          tab_title="Top Rated"
                          isNotSmallerScreen={isNotSmallerScreen}
                          movies={topRated}
                          handlePageClick={handleRated}
                        />
                      </TabPanel>
                    </TabPanels>
                  </Box>
                </Tabs>
              </Box>
            </Container>
          </Box>
        </Layout>
      )}
    </>
  );
};

export default Movies;
