import Home from "./components/Home";
import "./components/Custom.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Toss from "./components/Toss";
import CompScore from "./components/CompScore";
import UserScore from "./components/UserScore";
import { useState } from "react";
import Alert from "./components/Alert";
import Result from "./components/Result";
import About from "./components/About";
import OrientationWarning from "./components/OrientationWarning";

function App() {
  const [alert, setAlert] = useState<{ type: string; msg: string } | null>(
    null
  );

  setTimeout(() => {
    setAlert(null);
  }, 2000);
  return (
    <>
      <OrientationWarning />
      {alert && <Alert type={alert.type} msg={alert.msg} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Toss" element={<Toss />} />
        <Route path="/CompScore" element={<CompScore setAlert={setAlert} />} />
        <Route path="/UserScore" element={<UserScore setAlert={setAlert} />} />
        <Route path="/Result" element={<Result />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
