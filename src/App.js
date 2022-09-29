import Prime from "./Prime";
import { Routes, Route } from "react-router-dom";
import Registration from "./Pages/registration";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Prime />}></Route>
      <Route path="/registration" element={<Registration />}></Route>
    </Routes>
  );
}

export default App;
