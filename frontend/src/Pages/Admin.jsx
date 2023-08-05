import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import Message from "../Components/Message";

const Admin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/admin").then((e) => {
      setUsers(e.data);
      console.log(e.data[0].profile);
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

  return (
    <>
      <Helmet>
        <title>Zarządzaj użytkownikami</title>
      </Helmet>
      <Layout>
        <h1 className="text-center">Zarządzaj użytkownikami</h1>
        {users.length > 0 ? (
          <div class="table-responsive">
            <table class="table">
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
        ) : (
          <Message>Brak elementów do wyświetlenia</Message>
        )}
      </Layout>
    </>
  );
};

export default Admin;
