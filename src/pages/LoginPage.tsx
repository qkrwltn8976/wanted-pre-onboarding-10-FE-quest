import { Box, Button, Input, Stack, Text } from "@chakra-ui/react";
import * as React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface ILoginPageProps {}

interface ILoginInput {
  id: string;
  password: string;
}

const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {
  const { register, handleSubmit } = useForm<ILoginInput>();
  const onSubmit: SubmitHandler<ILoginInput> = (data, e) => {
    // e?.preventDefault();

    console.log(e, data);
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="middle"
      gap={10}
    >
      <Text fontSize="2em">로그인 페이지</Text>

      <Stack spacing={3}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input {...register("id")} placeholder="id" size="md" />
          <Input {...register("password")} placeholder="password" size="md" />
          <Button colorScheme="blue" type="submit">
            로그인
          </Button>
        </form>
      </Stack>
    </Box>
  );
};

export default LoginPage;
