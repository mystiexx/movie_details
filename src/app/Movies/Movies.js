import React from 'react'
import Layout from "../../Layout/Layout";
import { Box, Container, Text } from "@chakra-ui/react";

const Movies = () => {
  return (
    <Layout>
    <Box mt={8}>
      <Container maxW="container.xl">
        <Text fontFamily='Joan'>Movies</Text>
      </Container>
    </Box>
  </Layout>
  )
}

export default Movies