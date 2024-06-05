import { useEffect, useState } from "react";

import { Outlet, Route, Routes } from "react-router-dom";
import { Articles } from "../components/articles/articles";
import { NewArticle } from "../components/articles/newArticle";
import { Navbar } from "../components/navbar/navbar";
import { ImageGallery } from "../components/images/ImageGallery";
import { NewImage } from "../components/images/NewImage";
import { UpdateImage } from "../components/images/UpdateImage";

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
        <Route path="images"> 
          <Route index element={<ImageGallery currentUser={currentUser}/>} />
          <Route path=":newImage" element={<NewImage currentUser={currentUser}/>} />
        </Route>
          <Route path="/notImages/:imageId" element={<UpdateImage currentUser={currentUser}/>} />
      </Route>
    </Routes>
  );
};
