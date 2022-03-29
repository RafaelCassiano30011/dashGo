import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export const Profile = ({ showProfileData = true }: ProfileProps) => {
  return (
    <Flex>
      {showProfileData && (
        <Box mr="4" textAlign="center">
          <Text>Rafael Cassiano</Text>
          <Text color="gray.300" fontSize="small">
            rafael30011@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Rafael Cassiano "
        src="https://scontent.fcgh55-1.fna.fbcdn.net/v/t39.30808-6/231627754_4315451045202644_8623504303640700356_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeG0Jk6T_UTefSf2Us89E0jsNZEY5VWRlx81kRjlVZGXH1ufLbnLGr3-iVyIaENEw1qQSdAyR5VO24fffHhif0KQ&_nc_ohc=FK8s6YTA6LgAX-Xjbud&_nc_ht=scontent.fcgh55-1.fna&oh=00_AT-Tud34oPIFt6jcl57IKWztHoHusjYAqAG18jBZa_CFmQ&oe=61EB8D5B"
      />
    </Flex>
  );
};
