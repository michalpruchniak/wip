import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import Message from "../Components/Message";
import LoginStore from "../Config/LoginStore";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [wrongCreditionals, setWrongCreditionals] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (LoginStore.user?.profile) {
      navigate("/home");
    }
  }, [LoginStore.user]);

  const onSubmit = (value) => {
    setWrongCreditionals(false);

    axios
      .post("/login", {
        email: value.email,
        password: value.password,
      })
      .then((data) => {
        LoginStore.storeUser(data.data.user);
      })
      .catch(() => {
        setWrongCreditionals(true);
      });
  };

  return (
    <>
      <Helmet>
        <title>Zaloguj się na swoje konto</title>
      </Helmet>
      <Layout>
        <h1 className="text-center">Zaloguj się</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-3">
            {wrongCreditionals === true && (
              <Message>
                Nie udało się zalogować. Prawdopodobnie podałeś zły adres email
                lub hasło.
              </Message>
            )}
          </div>
          <div className="mt-3">
            <label htmlFor="email">Adres email</label>
            <input
              id="email"
              type="string"
              className="form-control"
              name="email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email?.type === "required" && (
              <Message>Adres email jest wymagany.</Message>
            )}
            {errors.email?.type === "pattern" && (
              <Message>To nie jest poprawny format adresu email.</Message>
            )}
          </div>

          <div className="mt-3">
            <label htmlFor="password">Hasło</label>
            <input
              id="password"
              type="password"
              className="form-control"
              name="password"
              {...register("password", {
                required: true,
                minLength: 4,
                maxLength: 45,
              })}
            />
            {errors.password?.type === "required" && (
              <Message>Hasło jest wymagane.</Message>
            )}
            {errors.password?.type === "minLength" && (
              <Message>Minimalna długość hasła to 4 znaki.</Message>
            )}
            {errors.password?.type === "maxLength" && (
              <Message>Maksymalna długość hasła to 45 znaków.</Message>
            )}
          </div>

          <div className="mt-3">
            <button className="btn btn-primary" type="submit">
              Zaloguj
            </button>
          </div>
        </form>
      </Layout>
    </>
  );
};

export default Login;
