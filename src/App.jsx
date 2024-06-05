import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar } from "./componenets/navbar/navbar";
import { Outlet, Route, Routes } from "react-router-dom";
import { Articles } from "./componenets/articles/articles";
import { NewArticle } from "./componenets/articles/newArticle";
import { TaskEventContainer } from "./componenets/TaskEventContainer.jsx";
import { Login } from "./componenets/auth/Login";
import { Authorized } from "./views/Authorized";
import { ApplicationViews } from "./views/applicationViews";
import { Register } from "./componenets/auth/Register";

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="*"
        element={
          <Authorized>
            <ApplicationViews />
          </Authorized>
        }
      >
        <Route path="articles" element={<Articles />} />
        <Route path="newArticle" element={<NewArticle />} />
        <Route path="TaskEventContainer" element={<TaskEventContainer/>} />
      </Route>
    </Routes>
  );
};
