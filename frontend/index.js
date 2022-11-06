import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./scss/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Base from "./components/global/Base";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Manufacture from "./components/pages/Manufacture";
import Material from "./components/pages/Material";
import Fronts from "./components/pages/Fronts";
import Backs from "./components/pages/Backs";
import Envelopes from "./components/pages/Envelopes";
import Iconography from "./components/pages/Iconography";
import Search from "./components/pages/DatabaseSearch";
import Games from "./components/pages/Games";
import Bibliography from "./components/pages/Bibliography";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <h2 style={{textAlign: 'center'}}>404: Page Not Found :(</h2>
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/manufacture",
        element: <Manufacture />
    },
    {
        path: "/material-aspects",
        element: <Material />
    },
    {
        path: "/material-aspects/fronts",
        element: <Fronts />
    },
    {
        path: "/material-aspects/backs",
        element: <Backs />
    },
    {
        path: "/material-aspects/envelopes",
        element: <Envelopes />
    },
    {
        path: "/iconography",
        element: <Iconography />
    },
    {
        path: "/iconography/search",
        element: <Search />
    },
    {
        path: "/games",
        element: <Games />
    },
    {
        path: "/bibliography",
        element: <Bibliography />
    }
  ]);

ReactDOM.render(
    <div>
        <Base>
            <RouterProvider router={router} />
        </Base>
    </div>,
    document.getElementById("app_root")
);


