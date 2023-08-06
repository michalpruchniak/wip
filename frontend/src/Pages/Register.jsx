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
        <RegisterForm
          url="register"
          resetForm={true}
          successMessage="Twoje konto zostało utworzone, a hasło zostało wysłane na podany
              przez Ciebie adres email."
          errorMessage="Wystąpił błąd. Prawdopodobnie email, którego użyłeś jest już
          używany."
          requestMethod="post"
          buttonText="Zarejestruj"
        />
      </Layout>
    </>
  );
};

export default Register;
