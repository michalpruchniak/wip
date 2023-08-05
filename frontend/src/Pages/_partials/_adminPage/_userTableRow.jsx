import axios from "axios";

const UserTableRow = ({ user, key, deleted }) => {
  const delUser = (id) => {
    axios.delete("/delete/" + id).then(() => {
      deleted(id);
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

export default UserTableRow;
