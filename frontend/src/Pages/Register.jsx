import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import Layout from "../Layout/Layout";
import TesterForm from "./_partials/_testerForm";
import DeveloperForm from "./_partials/_developerForm";
import PMForm from "./_partials/_pmForm";
import Message from "../Components/Message";

const Register = () => {
  const {
    reset,
    watch,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const jobSelection = watch("job", "1");

  const [success, setSuccess] = useState(false);

  const onSubmit = async (value) => {
    axios
      .post("/register", value)
      .then(() => {
        alert("Udało się");
      })
      .catch((err) => {
        alert("Wystąpił błąd");
        console.log(err);
      });
  };

  const handleJobChange = (event) => {
    setValue("job", parseInt(event.target.value));

    reset({
      testing_systems: null,
      ide: null,
      raporting_systems: null,
      programming_languages: null,
      mysql: null,
      methodology: null,
      scrum: null,
    });
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
            {success === true && (
              <div className="alert alert-success">
                Udało Ci się utworzyć konto.
              </div>
            )}
          </div>
          <div className="form-group mt-3">
            <label htmlFor="name">Imię</label>
            <input
              id="name"
              type="string"
              className="form-control"
              {...register("name", {
                required: true,
                minLength: 3,
                maxLength: 30,
              })}
            />
            {errors.name?.type === "required" && (
              <Message>Imię jest wymagane.</Message>
            )}
            {errors.name?.type === "minLength" && (
              <Message>Minimalna długość imienia to 3 znaki.</Message>
            )}

            {errors.name?.type === "maxLength" && (
              <Message>Maksymalna długość imienia to 30 znaków.</Message>
            )}
          </div>
          <div className="form-group mt-3">
            <label htmlFor="lastname">Nazwisko</label>
            <input
              id="lastname"
              type="string"
              className="form-control"
              {...register("lastname", {
                required: true,
                minLength: 3,
                maxLength: 35,
              })}
            />
            {errors.lastname?.type === "required" && (
              <Message>Nazwisko jest wymagane.</Message>
            )}
            {errors.lastname?.type === "minLength" && (
              <Message>Minimalna długość nazwiska to 3 znaki.</Message>
            )}

            {errors.lastname?.type === "maxLength" && (
              <Message>Maksymalna długość nazwiska to 35 znaków.</Message>
            )}
          </div>
          <div className="form-group mt-3">
            <label htmlFor="name">Adres email</label>
            <input
              id="email"
              type="string"
              className="form-control"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email?.type === "required" && (
              <Message>Adres email jest wymagany.</Message>
            )}
            {errors.email?.type === "pattern" && (
              <Message>To nie jest poprawny format adresu email.</Message>
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
            <label htmlFor="jobSelection">Stanowisko</label>
            <div>
              <select
                id="jobSelection"
                className="form-control"
                {...register("job", { required: true })}
                onChange={handleJobChange}
              >
                <option value="1">Tester</option>
                <option value="2">Developer</option>
                <option value="3">Project manager</option>
              </select>
            </div>
            {errors.jobSelection?.type === "required" && (
              <Message>Stanowisko jest wymagane.</Message>
            )}
          </div>
          {jobSelection === "1" && (
            <TesterForm register={register} errors={errors} />
          )}
          {jobSelection === "2" && (
            <DeveloperForm register={register} errors={errors} />
          )}
          {jobSelection === "3" && (
            <PMForm register={register} errors={errors} />
          )}
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
