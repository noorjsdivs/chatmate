import Prime from "./Prime";
import { Routes, Route } from "react-router-dom";
import Registration from "./Pages/registration";
import Login from "./Pages/login";
import Home from "./Pages/home";
import Message from "./Pages/message";
import Notification from "./Pages/notification";
import Settings from "./Pages/settings";

function App() {
  return (
    <Routes>
      <Route path="/prime" element={<Prime />}></Route>
      <Route path="/registration" element={<Registration />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/message" element={<Message />}></Route>
      <Route path="/notification" element={<Notification />}></Route>
      <Route path="/settings" element={<Settings />}></Route>
    </Routes>
  );
}

export default App;
