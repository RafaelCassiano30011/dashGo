import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  isCurrent?: boolean;
  number?: number;
  onPageChange: (page: number) => void;
}

export const PaginationItem = ({
  isCurrent = false,
  number,
  onPageChange,
}: PaginationItemProps) => {
  if (isCurrent) {
    return (
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
        {number}
      </Button>
    );
  }
  return (
    <Button
      onClick={() => {
        onPageChange(number);
      }}
      bg="gray.700"
      size="sm"
      fontSize="xs"
      _hover={{
        bg: "gray.500",
      }}
    >
      {number}
    </Button>
  );
};
