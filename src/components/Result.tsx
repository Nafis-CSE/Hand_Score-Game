import { Button } from "react-bootstrap";
import { useLocation} from "react-router-dom";
import { Link } from "react-router-dom";
import banner from "../assets/result.png";
import {useEffect} from 'react'
const Result = () => {
  const location = useLocation();

  const { Compscore, Userscore } = location.state || {};
const playWinSound = () => {
  const audio = new Audio(import.meta.env.BASE_URL + 'win.wav'); // public folder থেকে নিচ্ছে
  audio.play();
};
const playLoseSound = () => {
  const audio = new Audio(import.meta.env.BASE_URL + 'lose.mp3'); // public folder থেকে নিচ্ছে
  audio.play();
};
  useEffect(() => {
    if (Userscore > Compscore) {
      playWinSound(); // user জিতলে বাজবে
    }else if(Userscore < Compscore){
      playLoseSound();
    }
  }, [Userscore, Compscore]);


  return (
    <div className="text-white"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <div className="pt-5 ps-5">

        <h2 >
          Your score : {Userscore}
          <br />
          Compter's score : {Compscore}
        </h2>
      </div>
        <div className="pt-5">
        <div className="result container text-center my-5 mt-5">
          <h1 >
            {Userscore > Compscore
              ? "Congratulation! you Won.. 🥳"
              : Userscore == Compscore
              ? "It's a Tie match ..😣"
              : "So Sad! You Lose...😥"}
          </h1>
        </div>
        <div className="btn d-flex justify-content-center my-5">
          <Link to="/Home">
            <Button variant="success">Restart Game</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Result;
