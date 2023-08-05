const UserTableRow = ({ user, key }) => {
  return (
    <tr key={key}>
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
  );
};

export default UserTableRow;
