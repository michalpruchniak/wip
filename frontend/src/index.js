import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./style/style.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import axios from "axios";
import Admin from "./Pages/Admin";
import Edit from "./Pages/Edit";
import LoginStore from "./Config/LoginStore";
import Home from "./Pages/Home";

axios.defaults.baseURL = "http://localhost/api/";
axios.defaults.withCredentials = true;

function App() {
  useEffect(() => {
    axios
      .get("/user")
      .then((response) => {
        const userData = response.data;
        LoginStore.storeUser(userData);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Register />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
