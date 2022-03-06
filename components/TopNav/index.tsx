import NextLink from "next/link";
import { Box, HStack, Link, Text } from "@chakra-ui/react";
import { BsTwitter } from "react-icons/bs";

interface NavLinks {
  href: string;
  title: string;
  icon?: any;
  isExternal: boolean;
}
const navLinks: NavLinks[] = [
  {
    href: "/",
    title: "About",
    isExternal: false,
  },
  {
    href: "/blog",
    title: "Blog",
    isExternal: false,
  },
  {
    href: "https://twitter.com/NanaAkuaVee",
    title: "Twitter",
    icon: BsTwitter,
    isExternal: true,
  },
];

const TopNav = () => {
  return (
    <Box mb="20px">
      <HStack spacing="20px">
        {navLinks.map(({ href, icon, title, isExternal }) => (
          <NextLink key={title} href={href} passHref>
            <Link isExternal={isExternal}>
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
