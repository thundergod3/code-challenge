import React from "react";

import LoginForm from "./components/LoginForm";
import AuthorizedLayout from "src/components/layouts/AuthorizedLayout";

const LoginPage = () => {
  return (
    <AuthorizedLayout>
      <LoginForm />
    </AuthorizedLayout>
  );
};

export default LoginPage;
