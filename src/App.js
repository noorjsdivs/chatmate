import Prime from "./Prime";
import { Routes, Route } from "react-router-dom";
import Registration from "./Pages/registration";
import Login from "./Pages/login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Prime />}></Route>
      <Route path="/registration" element={<Registration />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}

export default App;
