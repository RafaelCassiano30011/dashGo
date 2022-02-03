import { Flex, Button, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/input";
export default function Home() {
  return (
    <Flex w="100%" h="100vh" align="center" justify="center">
      <Flex
        flexDir="column"
        as="form"
        w="100%"
        align="center"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
      >
        <Stack w="100%" spacing="4">
          <Input name="email" type="email" label="E-mail" />
          <Input name="password" type="password" label="Senha" />
        </Stack>

        <Button colorScheme="pink" type="submit" mt="6" width="100%">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
