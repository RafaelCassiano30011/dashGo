import { Text } from "@chakra-ui/react";

export const Logo = () => {
  return (
    <Text as="span" display="flex" fontSize={["2xl", "3xl"]} fontWeight="bold" letterSpacing="">
      dashgo
      <Text ml="1" color="pink.500">
        .
      </Text>
    </Text>
  );
};
