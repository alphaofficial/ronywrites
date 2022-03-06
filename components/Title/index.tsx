import { FC } from "react";
import { Heading } from "@chakra-ui/react";

const Title: FC<{ title: string }> = ({ title }) => (
  <Heading as="h1" fontSize="5xl" color="orange.300">
    {title}
  </Heading>
);

export default Title;
