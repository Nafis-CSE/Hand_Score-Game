import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import coin from "../assets/coin.jpeg";
import banner from "../assets/toss.jpeg";
function Toss() {
  const [rotate, setrotate] = useState(false);
  const [result, setresult] = useState(false);
  let tossResult = Math.floor(Math.random() * 2);
  const playLoseSound = () => {
    const audio = new Audio(import.meta.env.BASE_URL + 'flip-coin.mp3'); // public folder থেকে নিচ্ছে
    audio.play();
  };
  const handleClick = () => {
    setrotate(true);
    setTimeout(() => {
      setresult(true);
      setrotate(false);
    }, 2000);
  };

  return (
    <div
      className="d-flex justify-content-center position-relative text-white"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <div>
        {result ? (
          <div className="toss my-5">
            {tossResult == 0 ? (
              <>
                <h1 style={{ color: "#258b13ff" }}>You won the toss</h1>
                <div className="d-flex justify-content-center my-5">
                  <Link to="/UserScore" state={{ toss: "won" }}>
                    <Button className=" btn-dark px-5 py-2 fs-4">
                      Continue
                    </Button>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <h1 style={{ color: "red" }}>you loose the toss</h1>

                <div className="d-flex justify-content-center my-5">
                  <Link to="/CompScore" state={{ toss: "lose" }}>
                    <Button className=" btn-dark px-5 py-2 fs-4">
                      Continue
                    </Button>
                  </Link>
                </div>
              </>
            )}
          </div>
        ) : null}
        <div className="Toss ">
          <div
            className={`${rotate ? "coin" : ""} my-2 `}
            style={{
              backgroundImage: `url(${coin})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        {!rotate && !result && (
          <div className="text-center">
            <h1 className="my-5" style={{ color: "#0c5265ff" }}>
              Choose one
            </h1>
            <Button
              className="btn-secondary px-5 py-2 fs-4 me-4"
              onClick={() => {
                handleClick(), playLoseSound();
              }}
            >
              Head
            </Button>
            <Button
              className="btn-secondary px-5 py-2 fs-4 ms-4"
              onClick={() => {
                handleClick(), playLoseSound();
              }}
            >
              Tail
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Toss;
