import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

interface inputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest }: inputProps) {
  return (
    <FormControl>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        {...rest}
        id={name}
        bgColor="gray.900"
        variant="filled"
        focusBorderColor="pink.500"
        name={name}
        _hover={{
          bgColor: "gray.900",
        }}
        size="lg"
      />
    </FormControl>
  );
}
