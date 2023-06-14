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
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/label" element={<Label />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/trash" element={<Trash />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
