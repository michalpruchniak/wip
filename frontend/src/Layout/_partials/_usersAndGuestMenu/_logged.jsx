import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import LoginStore from "../../../Config/LoginStore";

const Logged = () => {
  const logout = () => {
    LoginStore.logout();

    window.history.pushState(null, "", "/login");
    window.location.reload();
  };

  return (
    <>
      <li className="nav-item">
        <span className="nav-link">
          Witaj, <b>{LoginStore.user.profile.name}</b>
        </span>
      </li>
      {LoginStore.user.is_admin === 1 && (
        <li className="nav-item">
          <Link to="/admin" className="nav-link">
            Panel admina
          </Link>
        </li>
      )}

      <li className="nav-item">
        <Link className="nav-link" onClick={logout}>
          Wyloguj
        </Link>
      </li>
    </>
  );
};

export default observer(Logged);
