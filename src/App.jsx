import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar } from "./componenets/navbar/navbar";
import { Outlet, Route, Routes } from "react-router-dom";
import { Articles } from "./componenets/articles/articles";
import { NewArticle } from "./componenets/articles/newArticle";
import { ImageGallery } from './components/images/ImageGallery'

function App() {
  const [count, setCount] = useState(0);

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
        <Route path="articles" element={<Articles />} />
        <Route path="newArticle" element={<NewArticle />} />
        <Route path="images" element={<ImageGallery />} />
      </Route>
    </Routes>
  );
}

export default App;
