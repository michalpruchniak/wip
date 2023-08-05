import axios from "axios";
import UsersStore from "../../../Config/Userstore";
import { observer } from "mobx-react-lite";
import { useState } from "react";

const UserTableRow = ({ user, key, deleted }) => {
  const [ask, setAsk] = useState(false);

  const delUser = (id) => {
    setAsk(false);
    axios
      .delete(`/delete/${id}`)
      .then(() => {
        UsersStore.delUser(id);
        deleted(true);
      })
      .catch(() => {
        deleted(false);
      });
  };

  const AskRemove = () => {
    return (
      <tr>
        <td colSpan={6} className="pt-4 pb-3">
          <h4 className="text-center">
            Czy na pewno chcesz usunąć tego usera?
          </h4>
          <div
            class="btn-group d-flex justify-content-center"
            role="group"
            aria-label="Basic example"
          >
            <button className="btn btn-danger" onClick={() => delUser(user.id)}>
              Usuń
            </button>
            <button className="btn btn-primary" onClick={() => setAsk(false)}>
              Anuluj
            </button>
          </div>
        </td>
      </tr>
    );
  };
  return (
    <>
      <tr key={key}>
        <td>{user.profile.name}</td>
        <td>{user.profile.lastname}</td>
        <td>{user.profile.email}</td>
        <td>{user.profile.job}</td>
        <td>{user.is_admin === 1 ? "Tak" : "Nie"}</td>
        <td>
          <i
            className="fa-solid fa-pen-to-square"
            style={{ marginRight: "10px" }}
          ></i>
          <i className="fa-solid fa-trash" onClick={() => setAsk(!ask)}></i>
        </td>
      </tr>
      {ask && <AskRemove />}
    </>
  );
};

export default observer(UserTableRow);
