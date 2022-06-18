import React, { useState, useEffect } from "react";
import Layout from "../../Layout/Layout";
import { Box, Container } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Loader from "../../Components/Loader/Loader";
import API from "../../api";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import TabContent from "./components/TabContent";

const Shows = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");
  const [movies, setMovies] = useState([]);
  const [airing, setAiring] = useState([]);
  const [onAir, setOnAir] = useState([]);
  const [rated, setRated] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const pop = await API.get(
        `/tv/popular?api_key=d0ff6f9cb6c33dcc6bc0c0a6381f2884`
      );
      const air = await API.get(
        `/tv/airing_today?api_key=d0ff6f9cb6c33dcc6bc0c0a6381f2884`
      );
      const airin = await API.get(
        `/tv/on_the_air?api_key=d0ff6f9cb6c33dcc6bc0c0a6381f2884`
      );
      const rated = await API.get(
        `/tv/top_rated?api_key=d0ff6f9cb6c33dcc6bc0c0a6381f2884`
      );
      setMovies(pop.data.results);
      setAiring(air.data.results);
      setOnAir(airin.data.results);
      setRated(rated.data.results);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const getNextPage = async (currentPage) => {
    const pop = await API.get(
      `/tv/popular?api_key=d0ff6f9cb6c33dcc6bc0c0a6381f2884&page=${currentPage}`
    );

    const data = pop.data.results;
    return data;
  };

  const getPlayingPage = async (currentPage) => {
    const play = await API.get(
      `/tv/airing_today?api_key=d0ff6f9cb6c33dcc6bc0c0a6381f2884&page=${currentPage}`
    );
    const data = play.data.results;
    return data;
  };

  const getUpcomingPage = async (currentPage) => {
    const play = await API.get(
      `/tv/on_the_air?api_key=d0ff6f9cb6c33dcc6bc0c0a6381f2884&page=${currentPage}`
    );
    const data = play.data.results;
    return data;
  };

  const getRated = async (currentPage) => {
    const play = await API.get(
      `/tv/top_rated?api_key=d0ff6f9cb6c33dcc6bc0c0a6381f2884&page=${currentPage}`
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
    setAiring(play);
    window.scrollTo(0, 0);
  };

  const handleUpcoming = async (data) => {
    let currentPage = data.selected + 1;
    const play = await getUpcomingPage(currentPage);
    setOnAir(play);
    window.scrollTo(0, 0);
  };

  const handleRated = async (data) => {
    let currentPage = data.selected + 1;
    const play = await getRated(currentPage);
    setRated(play);
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
                <SearchBar
                  data={movies.concat(airing, rated, onAir)}
                  placeholder="Search TV Show.."
                />
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
                        Airing Today
                      </Tab>
                      <Tab
                        fontSize={isNotSmallerScreen ? "md" : "sm"}
                        _selected={{
                          color: "white",
                          bg: "#FF7600",
                          borderRadius: "5px",
                        }}
                      >
                        on TV
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
                        <TabContent
                          tab_title={"Popular"}
                          isNotSmallerScreen={isNotSmallerScreen}
                          movies={movies}
                          handlePageClick={handlePageClick}
                        />
                      </TabPanel>
                      <TabPanel>
                        <TabContent
                          tab_title={"Airing Today"}
                          isNotSmallerScreen={isNotSmallerScreen}
                          movies={airing}
                          handlePageClick={handleNowPlaying}
                        />
                      </TabPanel>
                      <TabPanel>
                        <TabContent
                          tab_title={"On TV"}
                          isNotSmallerScreen={isNotSmallerScreen}
                          movies={onAir}
                          handlePageClick={handleUpcoming}
                        />
                      </TabPanel>
                      <TabPanel>
                        <TabContent
                          tab_title={"Top Rated"}
                          isNotSmallerScreen={isNotSmallerScreen}
                          movies={rated}
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

export default Shows;
