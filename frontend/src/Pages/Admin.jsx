import { Helmet } from "react-helmet";
import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { PulseLoader } from "react-spinners";
import AdminCotent from "./_partials/_adminPage/_adminContent";
import UsersStore from "../Config/Userstore";

const Admin = () => {
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    axios
      .get("/admin")
      .then((e) => {
        UsersStore.storeUsers(e.data);
        setAdmin(true);
      })
      .catch(() => {
        setTimeout(() => {
          setAdmin(false);
        });
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  }, []);

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
          <AdminCotent admin={admin} users={UsersStore.users} />
        )}
      </Layout>
    </>
  );
};

export default Admin;
