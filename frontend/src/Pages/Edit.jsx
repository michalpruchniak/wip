import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import RegisterForm from "./_partials/_registerForm/_registerForm";
import { useEffect, useState } from "react";
import axios from "axios";

const Edit = () => {
  const { id } = useParams();

  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`/user/${id}`).then((e) => {
      setUser(e.data);
    });
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [id]);

  return (
    <>
      <Helmet>
        <title>Edycja konta</title>
      </Helmet>
      <Layout>
        {loading === false && (
          <RegisterForm
            url={`update/${user?.id}`}
            user={user}
            resetForm={false}
            successMessage="Konto zostało poprawnie zaktualizowane."
            errorMessage="Wystąpił nieoczekiwany błąd."
            buttonText="Zaktualizuj"
            header={`Edytuj konto ${user?.profile.name} ${user?.profile.lastname}`}
          />
        )}
      </Layout>
    </>
  );
};

export default Edit;
