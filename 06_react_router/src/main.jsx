import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import User from "./components/User/User";
import Github, { githubInfoLoader } from "./components/Github/Github";
import Login from "./components/Login/Login";
import GetStarted from "./components/GetStarted/GetStarted";

/* First method of routing */

// const router=createBrowserRouter(
//   [
//     {
//     path: '/',
//     element: <Layout/>,
//     children:[
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact",
//         element: <Contact/>

//       }
//     ]
//   }
// ]
// )

/* Second method of routing */
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route
        loader={githubInfoLoader}
        path="github"
        element={<Github />}
      />
      <Route path="github" element={<Github />} />
      <Route path="login" element={<Login/>}/>
      <Route path="get-started" element={<GetStarted/>}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
