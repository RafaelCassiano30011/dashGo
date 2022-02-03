import { Button, Stack, Box } from "@chakra-ui/react";

export const Pagination = () => {
  return (
    <Stack direction="row" mt="8" justify="space-between" align="center" space="6">
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" >
        <Button
          colorScheme="pink"
          disabled
          _disabled={{
            bg: "pink.500",
            cursor: "default",
          }}
          size="sm"
          fontSize="xs"
        >
          1
        </Button>
        <Button
          bg="gray.700"
          disabled
          size="sm"
          fontSize="xs"
          _hover={{
            bg: "gray.500",
          }}
        >
          2
        </Button>
        <Button
          bg="gray.700"
          disabled
          size="sm"
          fontSize="xs"
          _hover={{
            bg: "gray.500",
          }}
        >
          3
        </Button>
      </Stack>
    </Stack>
  );
};
