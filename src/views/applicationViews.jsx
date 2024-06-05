import { useEffect, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Articles } from "../componenets/articles/articles";
import { NewArticle } from "../componenets/articles/newArticle";
import { Navbar } from "../componenets/navbar/navbar";
import { TaskEventContainer } from "../componenets/TaskEventContainer.jsx";
import { EventCreateForm } from "../componenets/forms/EventCreateForm.jsx";

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
        <Route path="TaskEventContainer" element={<TaskEventContainer currentUser={currentUser}/>} />
        <Route path="createEvent" element={<EventCreateForm currentUser={currentUser}/>} />
      </Route>
    </Routes>
  );
};
