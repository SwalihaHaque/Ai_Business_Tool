import { createBrowserRouter } from "react-router-dom";
import Login from "./component/Login";
import ContactTable from "./component/ReactDataTable/ContactTable";
import React from "react";


let router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/contacts",
        element: <ContactTable />,
    }
]);

export default router;
