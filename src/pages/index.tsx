import { Flex, Button, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/input";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type SignInFormData = {
  email: string;
  password: string;
};

const SignInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail Obrigatorio").email("E-mail Invalido"),
  password: yup.string().required("Senha Obrigatoria"),
});

export default function Home() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(SignInFormSchema),
  });

  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(values);
  };

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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack w="100%" spacing="4">
          <Input
            {...register("email")}
            name="email"
            type="email"
            label="E-mail"
            error={errors.email}
          />
          <Input
            {...register("password")}
            name="password"
            type="password"
            label="Senha"
            error={errors.password}
          />
        </Stack>

        <Button
          colorScheme="pink"
          type="submit"
          mt="6"
          width="100%"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
