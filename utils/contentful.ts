import { createClient } from "contentful";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  environment: process.env.CONTENTFUL_ENVIRONMENT as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

const fetchBlogPosts = async () => {
  try {
    const entries = await client.getEntries({
      content_type: "blog",
      order: "-fields.dateUpdated",
    });
    if (entries && entries.items) return entries.items;
    throw new Error("No entries found");
  } catch (error) {
    return error;
  }
};

const fetchBio = async () => {
  try {
    const entries = await client.getEntries({
      content_type: "about",
    });
    if (entries && entries.items) return entries.items;
    throw new Error("No entries found");
  } catch (error) {
    return error;
  }
};

export { fetchBlogPosts, fetchBio };
