import axios from "axios";
import UsersStore from "../../../Config/Userstore";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Link, redirect } from "react-router-dom";
import TesterSkills from "./_skills/_testerSkills";
import DeveloperSkills from "./_skills/_developerSkills";
import PMSkills from "./_skills/_pmSkills";

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
      <tr key={key} className="singleUser">
        <td>{user.profile.name}</td>
        <td>{user.profile.lastname}</td>
        <td>{user.profile.email}</td>
        <td>{user.profile.job}</td>
        <td>{user.is_admin === 1 ? "Tak" : "Nie"}</td>
        <td>
          <Link to={`/edit/${user.id}`}>
            <i
              className="fa-solid fa-pen-to-square"
              style={{ marginRight: "10px" }}
            ></i>
          </Link>
          <i className="fa-solid fa-trash" onClick={() => setAsk(!ask)}></i>
        </td>
      </tr>
      <tr key={`additional-${key}`}>
        <td colSpan={6} className="text-center">
          <b>Umiejętności</b>
        </td>
      </tr>
      {user.profile.job === 1 && <TesterSkills user={user} key={key} />}
      {user.profile.job === 2 && <DeveloperSkills user={user} key={key} />}
      {user.profile.job === 3 && <PMSkills user={user} key={key} />}
      {ask && <AskRemove />}
    </>
  );
};

export default observer(UserTableRow);
