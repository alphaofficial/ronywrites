import moment from "moment";
import { NextPage } from "next";
import { Box, Heading, Text } from "@chakra-ui/react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { PageLayout } from "../../layout";
import { fetchBlogPosts } from "../../utils/contentful";
import { richTextOptions } from "../../utils/richTextOptions";

const Story: NextPage<{ post: any }> = ({ post }) => {
  return (
    <PageLayout>
      <Box mb="30px">
        <Box mb="10px">
          <Heading color="gray.600" fontSize="2xl">
            {post.title}
          </Heading>
        </Box>
        <Box mb="10px">
          <Text color="gray.400" fontWeight="bold">
            {moment(post.updatedAt).format("DD MMM, YYYY")}
          </Text>
        </Box>
        <Box mb="10px">
          {documentToReactComponents(post.body, richTextOptions)}
        </Box>
      </Box>
    </PageLayout>
  );
};

export const getStaticPaths = async () => {
  const res: any = await fetchBlogPosts();
  if (res instanceof Error) return null;
  const slugs = res.map((post: any) => post.fields.slug);
  return {
    paths: slugs.map((slug: any) => ({ params: { slug } })),
    fallback: true,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const res: any = await fetchBlogPosts();
  if (res instanceof Error) return null;
  const match = res.find((p: any) => p.fields.slug === params.slug);
  const post = match.fields;
  return {
    props: {
      post,
    },
  };
};

export default Story;
