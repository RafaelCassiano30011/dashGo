import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine } from "react-icons/ri";

interface NavSectionProps {
  title: string;
  children: React.ReactNode;
}

export const NavSection = ({ title, children }: NavSectionProps) => {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        {title}
      </Text>
      <Stack spacing="4" mt="8" align="stretch">
        {children}
        {/* <Link display="flex" align="center">
          <Icon as={RiDashboardLine} fontSize="20" />
          <Text ml="4" fontWeight="medium">
            DashBoard
          </Text>
        </Link> */}
      </Stack>
    </Box>
  );
};
