import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeFill, RiInputMethodLine } from "react-icons/ri";

export const Sidebar = () => {
  return (
    <Box a="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            GERAl
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" align="center">
              <Icon as={RiDashboardLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                DashBoard
              </Text>
            </Link>
            <Link display="flex" align="center">
              <Icon as={RiContactsLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Usuarios
              </Text>
            </Link>
          </Stack>
        </Box>
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            Automaçâo
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" align="center">
              <Icon as={RiInputMethodLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Formularios
              </Text>
            </Link>
            <Link display="flex" align="center">
              <Icon as={RiGitMergeFill} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Automaçâo
              </Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};
