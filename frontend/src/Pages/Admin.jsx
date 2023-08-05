import { Helmet } from "react-helmet";
import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import Message from "../Components/Message";
import { PulseLoader } from "react-spinners";

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

  const userList = users.map((user, index) => (
    <tr key={index}>
      <td>{user.profile.name}</td>
      <td>{user.profile.lastname}</td>
      <td>{user.profile.email}</td>
      <td>{user.profile.job}</td>
      <td>{user.is_admin === 1 ? "Tak" : "Nie"}</td>
      <td>
        <i
          class="fa-solid fa-pen-to-square"
          style={{ marginRight: "10px" }}
        ></i>
        <i class="fa-solid fa-trash"></i>
      </td>
    </tr>
  ));

  const UserTable = () => {
    return users.length > 0 ? (
      <>
        <h1 className="text-center">Zarządzaj użytkownikami</h1>

        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr className="bg-info">
                <th>Imię</th>
                <th>Nazwiko</th>
                <th>Email</th>
                <th>Pozycja</th>
                <th>Czy admin</th>
                <th>Edycja</th>
              </tr>
            </thead>
            <tbody>{userList}</tbody>
          </table>
        </div>
      </>
    ) : (
      <Message>Brak elementów do wyświetlenia</Message>
    );
  };

  const AdminCotent = () => {
    return !admin ? (
      <Message>Nie masz uprawnień do przeglądania tej strony.</Message>
    ) : (
      <UserTable />
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
