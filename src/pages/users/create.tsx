import { Box, Divider, Flex, Heading, SimpleGrid, VStack, HStack, Button } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Input } from "../../components/Form/input";

export default function Create() {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bgColor="gray.800" p="8">
          <Heading size="lg" fontWeigth="normal">
            Criar usuários
          </Heading>
          <Divider my="6" borderColor="gray.700" />
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="name" label="Nome completo" />
              <Input name="email" label="Email" />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="passoword" type="password" label="Senha" />
              <Input name="passoword_confirmation" label="Confirmacao da senha" />
            </SimpleGrid>

            <Flex w="100%" mt="8" justify="flex-end">
              <HStack spacing="4">
                <Button colorScheme="whiteAlpha">Cancelar</Button>
                <Button colorScheme="pink">Salvar</Button>
              </HStack>
            </Flex>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}
