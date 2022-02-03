import { Flex, Text, Input, Icon, HStack, Box, Avatar } from "@chakra-ui/react";
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from "react-icons/ri";

export function Header() {
  return (
    <Flex as="header" w="100%" maxWidth={1480} h="20" mx="auto" mt="4" px="6" align="center">
      <Text as="span" display="flex" fontSize="3xl" fontWeight="bold" letterSpacing="">
        dashgo{" "}
        <Text ml="1" color="pink.500">
          .
        </Text>
      </Text>
      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        position="relative"
        alignSelf="center"
        color="gray.200"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: "gray.400" }}
        />
        <Icon as={RiSearchLine} fontSize="20"></Icon>
      </Flex>
      <Flex align="center" ml="auto">
        <HStack
          spacing="8"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          bordercolor="gray.700"
          borderRightWidth={1}
        >
          <Icon as={RiNotificationLine} fontSize="20"></Icon>
          <Icon as={RiUserAddLine} fontSize="20"></Icon>
        </HStack>
        <Flex>
          <Box mr="4" texAlign="center">
            <Text>Rafael Cassiano</Text>
            <Text color="gray.300" fontSize="small">
              rafael30011@gmail.com
            </Text>
          </Box>
          <Avatar
            size="md"
            name="Rafael Cassiano "
            src="https://scontent.fcgh55-1.fna.fbcdn.net/v/t39.30808-6/231627754_4315451045202644_8623504303640700356_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeG0Jk6T_UTefSf2Us89E0jsNZEY5VWRlx81kRjlVZGXH1ufLbnLGr3-iVyIaENEw1qQSdAyR5VO24fffHhif0KQ&_nc_ohc=FK8s6YTA6LgAX-Xjbud&_nc_ht=scontent.fcgh55-1.fna&oh=00_AT-Tud34oPIFt6jcl57IKWztHoHusjYAqAG18jBZa_CFmQ&oe=61EB8D5B"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
