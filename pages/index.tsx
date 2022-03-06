import { Box, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { PageLayout } from "../layout";
import { fetchBio } from "../utils/contentful";
import { richTextOptions } from "../utils/richTextOptions";
import { Title } from "../components";

const Home: NextPage<{ bio: any }> = ({ bio }) => {
  return (
    <PageLayout>
      <Box mb="20px">
        <Title title="About me" />
      </Box>
      <Box>
        {documentToReactComponents(bio, richTextOptions)}
        <Text />
      </Box>
    </PageLayout>
  );
};

export const getStaticProps = async () => {
  const res: any = await fetchBio();
  if (res instanceof Error) return null;
  const { bio } = res[0].fields;
  return {
    props: {
      bio,
    },
  };
};

export default Home;
