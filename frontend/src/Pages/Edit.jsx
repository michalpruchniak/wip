import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import RegisterForm from "./_partials/_registerForm/_registerForm";
import { useEffect, useState } from "react";
import axios from "axios";
import Message from "../Components/Message";
import UpdateForm from "./_partials/_updateForm/_updateForm";
import { PulseLoader } from "react-spinners";

const Edit = () => {
  const { id } = useParams();

  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [errorGet, setErrorGet] = useState(false);

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
        ) : (
          <UpdateForm user={user} errorGet={errorGet} />
        )}
      </Layout>
    </>
  );
};

export default Edit;
