import { NextPage } from "next";
import moment from "moment";
import {
  Box,
  Button,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { PageLayout } from "../../layout";
import { fetchBlogPosts } from "../../utils/contentful";
import { richTextOptions } from "../../utils/richTextOptions";
import { Title } from "../../components";

const Blog: NextPage<{ posts: any }> = ({ posts }) => {
  return (
    <PageLayout>
      <Box mb="20px">
        <Title title="Stories" />
      </Box>
      {posts.map((post: any) => (
        <LinkBox mb="30px" key={post.title}>
          <Box mb="10px">
            <NextLink key={post.title} href={`/blog/${post.slug}`} passHref>
              <LinkOverlay>
                <Heading color="gray.600" fontSize="xl">
                  {post.title}
                </Heading>
              </LinkOverlay>
            </NextLink>
          </Box>
          <Box mb="10px">
            <Text color="gray.400" fontWeight="bold">
              {moment(post.updatedAt).format("DD MMM, YYYY")}
            </Text>
          </Box>
          <Box mb="10px">
            {documentToReactComponents(post.excerpt, richTextOptions)}
          </Box>
          <Box textAlign="right">
            <Button bg="orange.300">Read more...</Button>
          </Box>
        </LinkBox>
      ))}
    </PageLayout>
  );
};

export const getStaticProps = async () => {
  const res: any = await fetchBlogPosts();
  if (res instanceof Error) return null;
  const posts = res.map((post: any) => {
    return {
      ...post.fields,
      createAt: post.sys.createdAt,
      updatedAt: post.sys.updatedAt,
    };
  });
  return {
    props: {
      posts,
    },
  };
};

export default Blog;
