import React, { useState, useEffect } from "react";
import Layout from "../../Layout/Layout";
import { Box, Container, Text, Flex } from "@chakra-ui/react";
import Jumbotron from "./components/Jumbotron";
import { useMediaQuery } from "@chakra-ui/media-query";
import SlideCard from "../../Components/Cards/SlideCard";
import SlideTvCard from "../../Components/Cards/SlideTvCard";
import dayjs from "dayjs";
import { AiOutlineCalendar } from "react-icons/ai";
import ReactStars from "react-stars";
import TV from "./components/TV";
import { Link } from "react-router-dom";

const Home = ({ jumbo, latest, series, popular, trending, tv }) => {
  const [display, setDisplay] = useState({});
  const [tvs, setTV] = useState({});
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

  useEffect(() => {
    const randMov = Math.floor(Math.random() * jumbo.length);
    const rand = jumbo[randMov];

    const randTV = Math.floor(Math.random() * tv.length);
    const rantv = tv[randTV];
    setTV(rantv);
    setDisplay(rand);
  }, [jumbo, tv]);
  return (
    <Layout>
      <Box mt={8}>
        <Jumbotron image={display?.backdrop_path} />

        <Box marginTop="150px" position="relative">
          <Container maxW="container.xl">
            <Text
              fontSize="xl"
              color="#FFFFFF4A"
              fontWeight="600"
              textTransform="uppercase"
            >
              Discover amazing movies
            </Text>
            <Text
              fontSize={isNotSmallerScreen ? "7xl" : "3xl"}
              textAlign={isNotSmallerScreen ? "left" : "center"}
              fontFamily="Joan"
            >
              {display?.title}
            </Text>
            <Text
              fontSize="md"
              fontWeight="400"
              w={isNotSmallerScreen ? "50%" : null}
              textAlign={isNotSmallerScreen ? "left" : "center"}
              marginTop={isNotSmallerScreen ? "20px" : null}
            >
              {display?.overview}
            </Text>

            <Flex mt={5} alignContent="center" alignItems="center">
              <Box mr={5}>
                <ReactStars
                  count={10}
                  value={display?.vote_average}
                  color2="#FF7600"
                  edit="false"
                  size={24}
                />
              </Box>
              <AiOutlineCalendar color="#FF7600" size={25} />
              <Text ml={2}>{dayjs(display?.release_date).format("YYYY")}</Text>
            </Flex>
            <Link to={`movie/${display?.title}/${display?.id}`}>Read more</Link>
          </Container>
        </Box>

        <Box
          h="100vh"
          position="relative"
          marginTop={isNotSmallerScreen ? "300px" : "350px"}
        >
          <Container maxW="container.xl">
            <Box h="100vh">
              <Box display="flex" justifyContent="space-between" mb={4}>
                <Text fontSize="2xl">Trending</Text>
              </Box>

              <Box>
                <SlideCard category={trending} />
              </Box>
            </Box>

            <Box h="100vh">
              <Box display="flex" justifyContent="space-between" mb={4}>
                <Text fontSize="2xl">Top Rated Movies</Text>
              </Box>

              <Box>
                <SlideCard category={latest} />
              </Box>
            </Box>

            <Box h="100vh">
              <Box display="flex" justifyContent="space-between" mb={4}>
                <Text fontSize="2xl">Popular Movies</Text>
              </Box>

              <Box>
                <SlideCard category={popular} />
              </Box>
            </Box>

            <TV
              image={tvs?.backdrop_path}
              isNotSmallerScreen={isNotSmallerScreen}
            />
            <Box
              marginTop={isNotSmallerScreen ? null : "-90%"}
              position="relative"
            >
              <Container maxW="container.xl">
                <Text
                  fontSize="xl"
                  color="#FFFFFF4A"
                  fontWeight="600"
                  textTransform="uppercase"
                >
                  Discover amazing TV Shows
                </Text>
                <Text
                  fontSize={isNotSmallerScreen ? "7xl" : "3xl"}
                  textAlign={isNotSmallerScreen ? "left" : "center"}
                  fontFamily="Joan"
                >
                  {tvs?.name}
                </Text>
                <Text
                  fontSize="md"
                  fontWeight="400"
                  w={isNotSmallerScreen ? "50%" : null}
                  textAlign={isNotSmallerScreen ? "left" : "center"}
                  marginTop={isNotSmallerScreen ? "20px" : null}
                >
                  {tvs?.overview}
                </Text>

                <Flex mt={5} alignContent="center" alignItems="center">
                  <Box mr={5}>
                    <ReactStars
                      count={10}
                      value={tvs?.vote_average}
                      color2="#FF7600"
                      edit="false"
                      size={24}
                    />
                  </Box>
                  <AiOutlineCalendar color="#FF7600" size={25} />
                  <Text ml={2}>{dayjs(tvs?.release_date).format("YYYY")}</Text>
                </Flex>
              </Container>
            </Box>

            <Box h="100vh" marginTop="100px">
              <Box display="flex" justifyContent="space-between" mb={4}>
                <Text fontSize="2xl">Popular TV Series</Text>
              </Box>

              <Box>
                <SlideTvCard category={series} />
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
