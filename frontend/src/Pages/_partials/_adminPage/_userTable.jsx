import Message from "../../../Components/Message";
import UserTableRow from "./_userTableRow";

const UserTable = ({ users }) => {
  const userList = users.map((user, index) => (
    <UserTableRow user={user} key={index} />
  ));

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

export default UserTable;
