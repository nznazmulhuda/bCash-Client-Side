import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import { RouterProvider } from "react-router-dom";
import Routes from "./Routes/Routes.jsx";
import axios from "axios";
import { Toaster } from "react-hot-toast";

axios.defaults.baseURL = "http://localhost:5000";

// Render the application
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* Context API provider */}
        <AuthProvider>
            {/* React Router Provider */}
            <RouterProvider router={Routes} />
            {/* React Hot Toast */}
            <Toaster />
        </AuthProvider>
    </React.StrictMode>,
);
