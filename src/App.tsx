import { Theme } from "@radix-ui/themes";
import React from "react";
import { ToastContainer } from "react-toastify";

import LoginPage from "./views/LoginPage";

const App = () => {
  return (
    <>
      <Theme>
        <LoginPage />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Theme>
    </>
  );
};

export default App;
