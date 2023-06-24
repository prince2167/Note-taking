import { Routes, Route } from "react-router-dom";
import { Layout, ProtectedRoute } from "./components/index";
import {
  Archive,
  Home,
  Label,
  LogIn,
  Profile,
  SignUp,
  Trash,
} from "./Pages/index";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="/label" element={<Label />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/trash" element={<Trash />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
