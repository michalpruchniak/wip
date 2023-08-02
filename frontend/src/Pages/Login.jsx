import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [wrongCreditionals, setWrongCreditionals] = useState(false);
  const [login, setLogin] = useState(false);

  const onSubmit = async (value) => {
    setWrongCreditionals(false);

    await axios
      .post("/login", {
        email: value.email,
        password: value.password,
      })
      .then(() => {
        setLogin(true);
        setWrongCreditionals(false);
      })
      .catch(() => {
        setWrongCreditionals(true);
        setLogin(false);
      });
  };

  return (
    <>
      <Helmet>
        <title>Zaloguj się na swoje konto</title>
      </Helmet>
      <h1 className="text-center">Zaloguj się</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="mt-3">
          {wrongCreditionals === true && (
            <div class="alert alert-danger">
              Nie udało się zalogować. Prawdopodobnie podałeś zły adres email
              lub hasło.
            </div>
          )}
          {login === true && (
            <div class="alert alert-success">
              Udało Ci się zalogować na konto.
            </div>
          )}
        </div>
        <div className="mt-3">
          <label htmlFor="email">Adres email</label>
          <input
            id="email"
            type="string"
            className="form-control"
            name="email"
            placeholder="email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email?.type === "required" && (
            <div className="alert alert-danger">Adres email jest wymagany.</div>
          )}
          {errors.email?.type === "pattern" && (
            <div className="alert alert-danger">
              To nie jest poprawny format adresu email.
            </div>
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
            <div className="alert alert-danger">Hasło jest wymagane.</div>
          )}
          {errors.password?.type === "minLength" && (
            <div className="alert alert-danger">
              Minimalna długość hasła to 4 znaki.
            </div>
          )}
          {errors.password?.type === "maxLength" && (
            <div className="alert alert-danger">
              Maksymalna długość hasła to 45 znaków.
            </div>
          )}
        </div>

        <div className="mt-3">
          <button className="btn btn-primary" role="submit">
            Zaloguj
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
