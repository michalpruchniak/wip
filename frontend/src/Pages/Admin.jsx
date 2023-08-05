import { Helmet } from "react-helmet";
import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import Message from "../Components/Message";
import { PulseLoader } from "react-spinners";
import UserTable from "./_partials/_adminPage/_userTable";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    axios
      .get("/admin")
      .then((e) => {
        setUsers(e.data);

        setTimeout(() => {
          setLoading(false);
          setAdmin(true);
        }, 800);
      })
      .catch(() => {
        setTimeout(() => {
          setLoading(false);
          setAdmin(false);
        });
      });
  }, []);

  const AdminCotent = () => {
    return !admin ? (
      <Message>Nie masz uprawnień do przeglądania tej strony.</Message>
    ) : (
      <UserTable users={users} />
    );
  };

  return (
    <>
      <Helmet>
        <title>Zarządzaj użytkownikami</title>
      </Helmet>
      <Layout>
        {loading ? (
          <div className="loader-container">
            <PulseLoader color="#0DCAF0" />
          </div>
        ) : (
          <AdminCotent />
        )}
      </Layout>
    </>
  );
};

export default Admin;
