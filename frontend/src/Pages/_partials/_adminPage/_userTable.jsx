import { useState } from "react";
import Message from "../../../Components/Message";
import UserTableRow from "./_userTableRow";
import { observer } from "mobx-react-lite";
const UserTable = ({ users }) => {
  const [errorDel, setErrorDel] = useState(false);
  const deleted = (status) => {
    setErrorDel(!status);
  };
  const userList = users.map((user, index) => (
    <UserTableRow
      deleted={(status) => deleted(status)}
      user={user}
      key={index}
    />
  ));

  return users.length > 0 ? (
    <>
      <h1 className="text-center">Zarządzaj użytkownikami</h1>
      {errorDel === true && (
        <Message>
          Nie udało się usuną użytkownika. Wybrany użytkownik nie istnieje lub
          próbujesz usunąć sam siebie.
        </Message>
      )}
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

export default observer(UserTable);
