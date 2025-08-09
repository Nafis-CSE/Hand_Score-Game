import Navbar from "./Navbar";
import "./Custom.css";
import banner from "../assets/hands.jpeg";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div
      className="position-relative text-white"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <Navbar />
      <div
        className="position-absolute top-50 start-50 translate-middle text-center"
        // style={{ zIndex: 2 }}
      >
        <h2 className="fw-bold display-4 mb-4 welcome">Welcome to the Game</h2>

        <Link to="/Toss">
          <button className=" Btn px-5 py-2 fs-4 fw-bold ">PLAY</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
