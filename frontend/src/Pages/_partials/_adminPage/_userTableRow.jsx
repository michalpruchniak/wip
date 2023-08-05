import axios from "axios";
import UsersStore from "../../../Config/UsersStore";
import { observer } from "mobx-react-lite";
const UserTableRow = ({ user, key, deleted }) => {
  const delUser = (id) => {
    axios
      .delete("/delete/" + id)
      .then(() => {
        UsersStore.delUser(id);
        deleted(true);
      })
      .catch(() => {
        deleted(false);
      });
  };

  return (
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
        <i className="fa-solid fa-trash" onClick={() => delUser(user.id)}></i>
      </td>
    </tr>
  );
};

export default observer(UserTableRow);
