import { useState, useEffect } from "react";
import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import four from "../assets/four.png";
import five from "../assets/five.png";
import six from "../assets/six.png";
import banner from "../assets/compscore.png";
import { useLocation, useNavigate } from "react-router-dom";
type alertProp = {
  setAlert: (alert: { type: string; msg: string }) => void;
};

const CompScore = ({ setAlert }: alertProp) => {
  const [score, setscore] = useState<number>(0);
  const [Cshot, setCshot] = useState<number>();
  const [Ushot, setUshot] = useState<number>();
  const location = useLocation();
  const { toss, Userscore } = location.state || {};

  const navigate = useNavigate();

  const handleClick = (num: number) => {
    const Cshot = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    setUshot(num);
    setCshot(Cshot);
    playClickSound();
    if (Cshot === num) {
      setAlert({ type: "success", msg: "Computer is out" });
      playOutSound();
      toss == "lose"
        ? navigate("/UserScore", { state: { Compscore: score } })
        : navigate("/Result", {
            state: { Compscore: score, Userscore: Userscore },
          });
    } else {
      setscore(score + Cshot);
    }
  };
  useEffect(() => {
    if (toss == null && score > Userscore) {
      navigate("/Result", {
        state: { Userscore: Userscore, Compscore: score },
      });
    }
  }, [score]);
  const playClickSound = () => {
    const audio = new Audio("/btn-click.wav"); // public folder থেকে নিচ্ছে
    audio.play();
  };
  const playOutSound = () => {
    const audio = new Audio("/compout.wav"); // public folder থেকে নিচ্ছে
    audio.play();
  };
  return (
    <div
      className="text-white"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <div className="game d-flex flex-wrap justify-content-center">
        <div className="score w-100 my-5 text-center">
          <h1>Computer Score:{score}</h1>
        </div>
        <div className="compInp w-50">
          <h3>Computer choice:{Cshot}</h3>
        </div>
        <div className="userInp ">
          <h3>your choice:{Ushot}</h3>
        </div>
      </div>
      <div className="input d-flex justify-content-center my-5 gap-3">
        <div
          className="finger"
          onClick={() => {
            handleClick(1);
          }}
          style={{
            backgroundImage: `url(${one})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          1
        </div>
        <div
          className="finger"
          onClick={() => {
            handleClick(2);
          }}
          style={{
            backgroundImage: `url(${two})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          2
        </div>
        <div
          className="finger"
          onClick={() => {
            handleClick(3);
          }}
          style={{
            backgroundImage: `url(${three})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          3
        </div>
        <div
          className="finger"
          onClick={() => {
            handleClick(4);
          }}
          style={{
            backgroundImage: `url(${four})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          4
        </div>
        <div
          className="finger"
          onClick={() => {
            handleClick(5);
          }}
          style={{
            backgroundImage: `url(${five})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          5
        </div>
        <div
          className="finger"
          onClick={() => {
            handleClick(6);
          }}
          style={{
            backgroundImage: `url(${six})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          6
        </div>
      </div>
      <div className="target">
        <h1 style={{ color: "#fa0707ff" }}>
          Target is:
          {toss == null ? Userscore + 1 : " To out computer as soon as you can"}
        </h1>
      </div>
    </div>
  );
};

export default CompScore;
