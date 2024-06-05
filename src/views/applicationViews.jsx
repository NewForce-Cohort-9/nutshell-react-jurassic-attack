import { useEffect, useState } from "react";
import { Home } from "../componenets/home/home.jsx"
import { Outlet, Route, Routes } from "react-router-dom";
import { Articles } from "../componenets/articles/articles";
import { NewArticle } from "../componenets/articles/newArticle";
import { Navbar } from "../componenets/navbar/navbar";
import { TaskEventContainer } from "../componenets/TaskEventContainer.jsx";
import { EventCreateForm } from "../componenets/forms/EventCreateForm.jsx";
import { EditArticle } from "../componenets/articles/editArticle";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localNutshellUser = localStorage.getItem("nutshell_user");
    const nutshellUserObject = JSON.parse(localNutshellUser);
    setCurrentUser(nutshellUserObject);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Outlet />
          </>
        }
      >
        <Route path="articles" element={<Articles currentUser={currentUser}/>} />
        <Route path="newArticle" element={<NewArticle currentUser={currentUser}/>} />
      </Route>
    </Routes>
  );
};
