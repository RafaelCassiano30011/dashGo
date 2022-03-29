import { Box, Divider, Flex, Heading, SimpleGrid, VStack, HStack, Button } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Input } from "../../components/Form/input";
import Link from "next/link";

import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type CreateUseFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const CreateUseFormSchema = yup.object().shape({
  name: yup.string().required("Nome Obrigatorio"),
  email: yup.string().required("E-mail Obrigatorio").email("E-mail Invalido"),
  password: yup.string().required("Senha Obrigatoria").min(6, "No minimo 6 caracteres"),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref("password")], "As senhas precisam ser iguais"),
});

export default function Create() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(CreateUseFormSchema),
  });

  const errors = formState.errors;

  const handleCreateUser: SubmitHandler<CreateUseFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bgColor="gray.800"
          p={["6", "8"]}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeigth="normal">
            Criar usuários
          </Heading>
          <Divider my="6" borderColor="gray.700" />
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input error={errors.name} {...register("name")} name="name" label="Nome completo" />
              <Input error={errors.email} {...register("email")} name="email" label="Email" />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                error={errors.password}
                {...register("password")}
                name="password"
                type="password"
                label="Senha"
              />
              <Input
                error={errors.password_confirmation}
                {...register("password_confirmation")}
                name="password_confirmation"
                type="password"
                label="Confirmacao da senha"
              />
            </SimpleGrid>

            <Flex w="100%" mt="8" justify="flex-end">
              <HStack spacing="4">
                <Link passHref href="/users">
                  <Button as="a" colorScheme="whiteAlpha">
                    Cancelar
                  </Button>
                </Link>

                <Button type="submit" isLoading={formState.isSubmitting} colorScheme="pink">
                  Salvar
                </Button>
              </HStack>
            </Flex>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}
