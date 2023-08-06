import { Helmet } from "react-helmet";
import Layout from "../Layout/Layout";
import RegisterForm from "./_partials/_registerForm/_registerForm";

const Register = () => {
  return (
    <>
      <Helmet>
        <title>Zarejestruj nowe konto</title>
      </Helmet>
      <Layout>
        <h1 className="text-center">Zarejestruj się</h1>
        <RegisterForm url="register" />
      </Layout>
    </>
  );
};

export default Register;
