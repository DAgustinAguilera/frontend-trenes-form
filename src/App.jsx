import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FormContainer } from "./components/FormContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import Inicio from "./components/Inicio";
import Login from "./components/Login";
import Informes from "./components/Informes";
import "./App.css";

export const AuthContext = React.createContext();

const checkUserLS = (valor) => {
  return typeof localStorage !== "undefined" ? JSON.parse(localStorage.getItem(valor)) : null
}

const initialState = {
  isAuthenticated: !!checkUserLS("jwt"),
  jwt: checkUserLS("jwt"),
  user: checkUserLS("user")
}
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("jwt", JSON.stringify(action.payload.jwt));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        jwt: action.payload.jwt
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    default:
      return state;
  }
};
function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <AuthContext.Provider value={{state, dispatch}}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Inicio />} />
          <Route path="/reportes" element={<FormContainer />} />
          <Route path="/informes" element={<Informes />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
