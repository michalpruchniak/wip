import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import Layout from "../Layout/Layout";
import TesterForm from "./_partials/_testerForm";
import DeveloperForm from "./_partials/_developerForm";
import PMForm from "./_partials/_pmForm";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [job, setJob] = useState("1");

  const [wrongCreditionals, setWrongCreditionals] = useState(false);
  const [login, setLogin] = useState(false);

  const onSubmit = async (value) => {
    console.log(value);
  };

  const handleJobChange = (event) => {
    setJob(event.target.value);
  };

  return (
    <>
      <Helmet>
        <title>Zarejestruj nowe konto</title>
      </Helmet>
      <Layout>
        <h1 className="text-center">Zarejestruj się</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-3">
            {wrongCreditionals === true && (
              <div className="alert alert-danger">
                Nie udało się zalogować. Prawdopodobnie podałeś zły adres email
                lub hasło.
              </div>
            )}
            {login === true && (
              <div className="alert alert-success">
                Udało Ci się zalogować na konto.
              </div>
            )}
          </div>
          <div className="form-group mt-3">
            <label htmlFor="name">Imię</label>
            <input
              id="name"
              type="string"
              className="form-control"
              name="name"
              {...register("name", {
                required: true,
                minLength: 3,
                maxLength: 30,
              })}
            />
            {errors.name?.type === "required" && (
              <div className="alert alert-danger">Imię jest wymagane.</div>
            )}
            {errors.name?.type === "minLength" && (
              <div className="alert alert-danger">
                Minimalna długość imienia to 3 znaki.
              </div>
            )}

            {errors.name?.type === "maxLength" && (
              <div className="alert alert-danger">
                Maksymalna długość imienia to 30 znaków.
              </div>
            )}
          </div>
          <div className="form-group mt-3">
            <label htmlFor="lastname">Nazwisko</label>
            <input
              id="lastname"
              type="string"
              className="form-control"
              name="lastname"
              {...register("lastname", {
                required: true,
                minLength: 3,
                maxLength: 35,
              })}
            />
            {errors.lastname?.type === "required" && (
              <div className="alert alert-danger">Nazwisko jest wymagane.</div>
            )}
            {errors.lastname?.type === "minLength" && (
              <div className="alert alert-danger">
                Minimalna długość nazwiska to 3 znaki.
              </div>
            )}

            {errors.lastname?.type === "maxLength" && (
              <div className="alert alert-danger">
                Maksymalna długość nazwiska to 35 znaków.
              </div>
            )}
          </div>
          <div className="form-group mt-3">
            <label htmlFor="name">Adres email</label>
            <input
              id="email"
              type="string"
              className="form-control"
              name="email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email?.type === "required" && (
              <div className="alert alert-danger">
                Adres email jest wymagany.
              </div>
            )}
            {errors.email?.type === "pattern" && (
              <div className="alert alert-danger">
                To nie jest poprawny format adresu email.
              </div>
            )}
          </div>
          <div className="form-group mt-3">
            <label htmlFor="description">Opis</label>
            <textarea
              id="description"
              className="form-control"
              rows={5}
            ></textarea>
          </div>

          <div className="form-group mt-3">
            <label htmlFor="job">Stanowisko</label>
            <div>
              <select
                id="job"
                value={job}
                onChange={handleJobChange}
                className="form-control"
              >
                <option value="1">Tester</option>
                <option value="2">Developer</option>
                <option value="3">Project manager</option>
              </select>
            </div>
            {errors.job?.type === "required" && (
              <div className="alert alert-danger">
                Stanowisko jest wymagane.
              </div>
            )}
          </div>
          {job === "1" && <TesterForm register={register} errors={errors} />}
          {job === "2" && <DeveloperForm register={register} errors={errors} />}
          {job === "3" && <PMForm register={register} errors={errors} />}
          <div className="form-group mt-3">
            <button className="btn btn-primary" type="submit">
              Zarejestruj
            </button>
          </div>
        </form>
      </Layout>
    </>
  );
};

export default Register;
