import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import RegisterForm from "./_partials/_registerForm/_registerForm";
import { useEffect, useState } from "react";
import axios from "axios";
import { PulseLoader } from "react-spinners";
import Message from "../Components/Message";

const Edit = () => {
  const { id } = useParams();

  const [user, setUser] = useState();
  const [errorGet, setErrorGet] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`/user/${id}`)
      .then((e) => {
        setUser(e.data);
      })
      .catch(() => {
        setErrorGet(true);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  }, [id]);

  // Wiem, że dobrze byłoby też bardziej uporządkować ten Kod, ale w tym przypadku
  // jest na tyle prosty, że już go zostawię,
  return (
    <>
      <Helmet>
        <title>Edycja konta</title>
      </Helmet>
      <Layout>
        {loading ? (
          <div className="loader-container">
            <PulseLoader color="#0DCAF0" />
          </div>
        ) : errorGet ? (
          <Message>
            Wystąpił błąd. Prawdopodobnie taki user nie istnieje, albo ie masz
            uprawnień do przeglądania tej strony.
          </Message>
        ) : (
          <RegisterForm
            url={`update/${user?.id}`}
            user={user}
            resetForm={false}
            successMessage="Konto zostało poprawnie zaktualizowane."
            errorMessage="Wystąpił nieoczekiwany błąd."
            buttonText="Zaktualizuj"
            requestMethod="put"
            header={`Edytuj konto ${user?.profile.name} ${user?.profile.lastname}`}
          />
        )}
      </Layout>
    </>
  );
};

export default Edit;
