import { observer } from "mobx-react-lite";
import LoginStore from "../../Config/LoginStore";
import Guest from "./_usersAndGuestMenu/_guest";
import Logged from "./_usersAndGuestMenu/_logged";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <span className="navbar-brand">WiP project</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto offset-9">
            {LoginStore.user?.id ? <Logged /> : <Guest />}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default observer(Nav);
