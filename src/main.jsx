import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { NoteProvider } from "./contexts/note-context.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <NoteProvider>
        <ToastContainer />
        <App />
      </NoteProvider>
    </BrowserRouter>
  </React.StrictMode>
);
