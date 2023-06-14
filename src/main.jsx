import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { NoteProvider } from "./contexts/note-context.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./contexts/auth-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <NoteProvider>
        <AuthProvider>
          <ToastContainer />
          <App />
        </AuthProvider>
      </NoteProvider>
    </BrowserRouter>
  </React.StrictMode>
);
