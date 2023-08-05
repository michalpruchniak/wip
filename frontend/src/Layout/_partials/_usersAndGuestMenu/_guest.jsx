import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

const Guest = () => {
  return (
    <>
      <li className="nav-item">
        <Link to="/" className="nav-link">
          Rejestracja
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/login" className="nav-link">
          Logowanie
        </Link>
      </li>
    </>
  );
};

export default observer(Guest);
