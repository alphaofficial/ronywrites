import { Box, Image, Text } from "@chakra-ui/react";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";

const richTextOptions = {
  renderMark: {
    [MARKS.BOLD]: (text: any) => (
      <Text mb="20px" fontSize="20px" fontWeight="bold">
        {text}
      </Text>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
      <Text mb="20px" fontSize="20px">
        {children}
      </Text>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node: any, children: any) => {
      return (
        <Box mb="30px">
          <Image
            src={`https://${node.data.target.fields.file.url}`}
            alt={node.data.target.fields.description}
            borderRadius="10px"
          />
        </Box>
      );
    },
  },
};

export { richTextOptions };
