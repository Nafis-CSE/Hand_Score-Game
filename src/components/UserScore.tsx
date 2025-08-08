import { useState, useEffect } from "react";
import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import four from "../assets/four.png";
import five from "../assets/five.png";
import six from "../assets/six.png";
import banner from "../assets/userscore.png";
import { useNavigate, useLocation } from "react-router-dom";
type alertProp = {
  setAlert: (alert: { type: string; msg: string }) => void;
};

const Userscore = ({ setAlert }: alertProp) => {
  const [score, setscore] = useState<number>(0);
  const [Cshot, setCshot] = useState<number>();
  const [Ushot, setUshot] = useState<number>();
  const location = useLocation();
  const { toss, Compscore } = location.state || {};
  console.log(toss);
  const navigate = useNavigate();
  const playLoseSound = () => {
    const audio = new Audio("/btn-click.wav"); // public folder থেকে নিচ্ছে
    audio.play();
  };
  const playOutSound = () => {
    const audio = new Audio("/userout.wav"); // public folder থেকে নিচ্ছে
    audio.play();
  };
  const handleClick = (num: number) => {
    playLoseSound();
    const Cshot = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    setUshot(num);
    setCshot(Cshot);

    if (Cshot === num) {
      setAlert({ type: "danger", msg: "You're out" });
      playOutSound();
      toss == "won"
        ? navigate("/CompScore", { state: { Userscore: score } })
        : navigate("/Result", {
            state: { Userscore: score, Compscore: Compscore },
          });
    } else {
      setscore(score + num);
    }
  };
  useEffect(() => {
    if (toss == null && score > Compscore) {
      navigate("/Result", {
        state: { Userscore: score, Compscore: Compscore },
      });
    }
  }, [score]);

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
          <h1>Your Score:{score}</h1>
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
          onClick={() => handleClick(1)}
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
          onClick={() => handleClick(2)}
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
          onClick={() => handleClick(3)}
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
          onClick={() => handleClick(4)}
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
          onClick={() => handleClick(5)}
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
          onClick={() => handleClick(6)}
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
          Target is :{" "}
          {toss == "won" ? " To Score as much as you can" : Compscore + 1}
        </h1>
      </div>
    </div>
  );
};

export default Userscore;
