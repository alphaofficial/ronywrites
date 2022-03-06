import { ReactNode } from "react";
import SimpleBar from "simplebar-react";
import { Box, Container } from "@chakra-ui/react";
import { TopNav } from "../components";
import "simplebar/dist/simplebar.min.css";

const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SimpleBar style={{ maxHeight: "100vh" }}>
      <Box py="10" px="20px">
        <Container maxW="container.md">
          <Box>
            <TopNav />
          </Box>
          <Box>{children}</Box>
        </Container>
      </Box>
    </SimpleBar>
  );
};

export default PageLayout;
