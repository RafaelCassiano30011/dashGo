import { Icon, HStack } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

export const NotificationsNav = () => {
  return (
    <HStack
      spacing={["6", "8"]}
      mx={["6", "8"]}
      pr={["6", "8"]}
      py="1"
      color="gray.300"
      bordercolor="gray.700"
      borderRightWidth={1}
    >
      <Icon as={RiNotificationLine} fontSize="20"></Icon>
      <Icon as={RiUserAddLine} fontSize="20"></Icon>
    </HStack>
  );
};
