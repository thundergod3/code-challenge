import { Flex, Text } from "@radix-ui/themes";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import logoImage from "src/assets/images/logo.png";
import { loginFormSchema } from "../../constants";

import FormHelper from "src/components/molecules/FormHelper";
import Button from "src/components/atoms/Button";

type LoginFormValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    criteriaMode: "all",
    mode: "all",
    resolver: yupResolver(loginFormSchema),
  });

  const onSubmit: SubmitHandler<LoginFormValues> = () => {
    toast.success("Login successfully");
    reset({
      email: "",
      password: "",
    });
  };

  return (
    <Flex direction="column" className="gap-10 md:min-w-[508px]">
      <img src={logoImage} alt="Logo" className="w-[185px] object-cover" />
      <form name="form" onSubmit={handleSubmit(onSubmit)} className="w-full">
        <Flex direction="column" className="gap-5">
          <Text className="text-black font-semibold text-[28px]">
            Log in to your account
          </Text>
          <FormHelper
            control={control}
            form={{
              type: "input",
              name: "email",
              label: "Email",
              errorMessage: errors?.email?.message,
            }}
          />
          <FormHelper
            control={control}
            form={{
              type: "input",
              name: "password",
              label: "Password",
              errorMessage: errors?.password?.message,
              fieldProps: {
                type: "password",
                rightHelperText: "Forgot your password?",
                isShowPassword: true,
              },
            }}
          />
          <Button type="submit" disabled={!isValid}>
            Login
          </Button>
        </Flex>
      </form>
      <Text className="text-xs !m-auto w-fit">
        Don’t have an account yet?{" "}
        <Text className="text-blue1 cursor-pointer">Sign up here</Text>
      </Text>
    </Flex>
  );
};

export default LoginForm;
