import Message from "../../../Components/Message";
import UserTable from "./_userTable";

const AdminCotent = ({ admin, users }) => {
  return !admin ? (
    <Message>Nie masz uprawnień do przeglądania tej strony.</Message>
  ) : (
    <UserTable users={users} />
  );
};

export default AdminCotent;
