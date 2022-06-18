import React, { useState, useEffect } from "react";
import Layout from "../../Layout/Layout";
import { useParams } from "react-router-dom";
import API from "../../api";
import Poster from "./components/Poster";
import { Box, Container, Text, Flex, Tag } from "@chakra-ui/react";
import dayjs from "dayjs";
import { AiOutlineCalendar } from "react-icons/ai";
import ReactStars from "react-stars";
import { useMediaQuery } from "@chakra-ui/media-query";
import Loader from "../../Components/Loader/Loader";
import SlideCard from "../../Components/Cards/SlideCard";

const Details = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const [recommend, setRecommend] = useState([]);
  const [similar, setSimilar] = useState([]);
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");
  const [loading, setLoading] = useState(true);

  const getMovie = async () => {
    try {
      const res = await API.get(
        `/movie/${params.id}?api_key=d0ff6f9cb6c33dcc6bc0c0a6381f2884`
      );
      const vid = await API.get(
        `/movie/${params.id}/videos?api_key=d0ff6f9cb6c33dcc6bc0c0a6381f2884`
      );
      const rec = await API.get(
        `/movie/${params.id}/recommendations?api_key=d0ff6f9cb6c33dcc6bc0c0a6381f2884`
      );
      const sim = await API.get(
        `/movie/${params.id}/similar?api_key=d0ff6f9cb6c33dcc6bc0c0a6381f2884`
      );
      const rev = await API.get(
        `/movie/${params.id}/reviews?api_key=d0ff6f9cb6c33dcc6bc0c0a6381f2884`
      );
      console.log(res.data);
      console.log("Reviews", rev.data.results);
      setRecommend(rec.data.results);
      setSimilar(sim.data.results);
      setMovie(res.data);
      console.log(vid.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Layout>
          <Poster image={movie.backdrop_path} />
          <Box marginTop="150px" position="relative">
            <Container maxW="container.xl">
              <Text
                fontSize="xl"
                color="#FFFFFF4A"
                fontWeight="600"
                textTransform="uppercase"
              >
                {movie.tagline}
              </Text>
              <Text
                fontSize={isNotSmallerScreen ? "7xl" : "3xl"}
                textAlign={isNotSmallerScreen ? "left" : "center"}
                fontFamily="Joan"
              >
                {movie?.title}
              </Text>
              <Text
                fontSize="md"
                fontWeight="400"
                w={isNotSmallerScreen ? "50%" : null}
                textAlign={isNotSmallerScreen ? "left" : "center"}
                marginTop={isNotSmallerScreen ? "20px" : null}
              >
                {movie?.overview}
              </Text>

              <Flex
                mt={5}
                flexDirection={isNotSmallerScreen ? "row" : "column"}
                alignContent="center"
                alignItems="center"
              >
                <Box mr={5}>
                  <ReactStars
                    count={10}
                    value={movie?.vote_average}
                    color2="#FF7600"
                    edit={false}
                    size={24}
                  />
                </Box>
                <AiOutlineCalendar color="#FF7600" size={25} />
                <Text ml={2}>
                  {dayjs(movie?.release_date).format("MMM D, YYYY")}
                </Text>
              </Flex>
              <Box>
                {movie?.genres?.map((genre) => (
                  <Tag key={genre.id} mr={5} bgColor="#FF7600B0" color="#fff">
                    {genre.name}
                  </Tag>
                ))}
              </Box>
            </Container>
          </Box>

          <Box marginTop="300px" h="100vh">
            <Container maxW="container.xl">
              <Text fontSize="2xl" mb={3}>
                Recommendations
              </Text>
              <SlideCard category={recommend} />
            </Container>
          </Box>
          <Box h="100vh">
            <Container maxW="container.xl">
              <Text fontSize="2xl" mb={3}>
                Similar
              </Text>
              <SlideCard category={similar} />
            </Container>
          </Box>
        </Layout>
      )}
    </>
  );
};

export default Details;
