import NextLink from "next/link";
import { Box, HStack, Link, Text } from "@chakra-ui/react";
import { BsTwitter } from "react-icons/bs";

interface NavLinks {
  href: string;
  title: string;
  icon?: any;
}
const navLinks: NavLinks[] = [
  {
    href: "/",
    title: "About",
  },
  {
    href: "/blog",
    title: "Blog",
  },
  {
    href: "https://twitter.com/NanaAkuaVee",
    title: "Twitter",
    icon: BsTwitter,
  },
];

const TopNav = () => {
  return (
    <Box mb="20px">
      <HStack spacing="20px">
        {navLinks.map(({ href, icon, title }) => (
          <NextLink key={title} href={href} passHref>
            <Link>
              {icon ? (
                icon({ size: 20, color: "orange" })
              ) : (
                <Text color="orange.300" fontWeight="semibold">
                  {title}
                </Text>
              )}
            </Link>
          </NextLink>
        ))}
      </HStack>
    </Box>
  );
};

export default TopNav;
