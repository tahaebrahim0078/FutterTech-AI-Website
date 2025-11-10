import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./Pages/1home/Home";

import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import BlogOpen from "./Pages/3blogOpenPage/BlogOpen.jsx";
import News from "./Pages/2newsPage/News.jsx";
import Podcastes from "./Pages/4podcastesPage/Podcastes.jsx";
import Resourses from "./Pages/5resoursesPage/Resourses.jsx";
import Contact from "./Pages/6contactPage/Contact.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
        <Route index element={<Home />} /> {/* Home is now the default route */}
      <Route path="home" element={<Home />} />
      <Route path="news" element={<News />} />
      <Route path="blogOpen" element={<BlogOpen />} />

      <Route path="podcastes" element={<Podcastes />} />
      <Route path="resourses" element={<Resourses />} />

      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
