import { Box, Heading, Text } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Box
      p={{
        base: 4,
        md: "20px",
      }}
    >
      <Heading as="h1" fontSize="5xl">
        Welcome to blog
      </Heading>
      <Text>Hello</Text>
    </Box>
  );
};

export default Home;
